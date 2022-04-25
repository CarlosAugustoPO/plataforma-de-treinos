import sendMail from 'src/lib/fetchers/mail/send/index';
import readUser from 'src/lib/fetchers/users/read/index';
import updateUserRecoveryCodeFields from 'src/lib/fetchers/users/update/recoveryCodeFields/index';
import tratarNome from 'src/lib/utils/tratarNome';
import Ok from 'src/types/Ok';

export async function sendChangePasswordEmail(
  email: string,
): Promise<Ok> {
  const emailTratado = email.toLowerCase();

  const updateUserRecoveryCodeResult =
    await updateUserRecoveryCodeFields(email);
  if (updateUserRecoveryCodeResult.error) {
    return {
      error: updateUserRecoveryCodeResult.error,
    };
  }

  const user = await readUser({
    email: emailTratado,
    select: {
      recovery_code: true,
      fname: true,
      fragment_hash_password: true,
    },
  });

  if (user.error) {
    return {
      error: user.error,
    };
  }

  const recoveryCode = user.data?.recovery_code;

  const fname = user.data?.fname;
  const hashFragment = user.data?.fragment_hash_password;
  const firstnameTratado = tratarNome(fname as string);

  const publicUrl = process.env.NEXT_PUBLIC_VERCEL_URL;
  const protocol =
    process.env.NEXT_PUBLIC_VERCEL_ENV === 'development'
      ? 'http://'
      : 'https://';
  const url = `${protocol + publicUrl}`;

  const recoveryUrl = `${url}/trocar-senha/${emailTratado}/${hashFragment}/${recoveryCode}`;
  const reportUrl = `${url}/report-trocar-senha/${emailTratado}/${hashFragment}`;

  const sender =
    'Plataforma de Treinos <cadastro@plataformadetreinos.com.br>';
  const toMail = emailTratado;
  const subject = `${recoveryCode} é o seu código de recuperação na Plataforma de Treinos`;
  const htmlEmail = `
      <h1 style="color:#423768; font-size:18px;">Ação solicitada: Troque sua senha na Plataforma de Treinos</h1>

      <hr style="width:100%;text-align:left;margin-left:0;background-color:#fff; border-width: 0.5px;">

      <p style="font-size:15px;">
        Olá ${firstnameTratado},
      </p>

      <p style="font-size:15px;">
        Você solicitou a troca de senha na Plataforma de Treinos.<br />
        Para trocar a sua senha, basta acessar a página de troca de senhas, e escolher uma nova senha e inserir o seu código de recuperação.<br /><br />
        <strong>PS:</strong> Esse link ficará válido apenas por 1 dia.
      </p>

      <div style="font-size:15px; margin-top:30px; margin-bottom:30px">
        <a
          href="${recoveryUrl}"
          style="background:#423768;
            border:none;
            outline:none;
            text-decoration:none;
            padding:10px 26px;
            font-weight:bold;
            font-family:Arial;
            color:#ffffff;
            display:inline-block;
            cursor:pointer;
            border-radius:4px;
          "
        >
         Trocar Senha
        </a>
      </div>

      <p style="font-size:15px;">
        Talvez você precise inserir este código de recuperação:
      </p>

      <p style="font-size:15px;">
        <br />
        <span
          style="border:1px solid #423768;
            background-color:#4237685e;
            padding:10px 26px;
            border-radius: 4px;
          "
        >
          ${recoveryCode}
        </span>
      </p>

      <p style="font-size:15px;">
        <br />
        <strong>
          Não solicitou esta alteração?
        </strong>
        <br />
        Se você não solicitou uma nova senha, <a href='${reportUrl}'>avise-nos</a>.
      </p>
      <hr style="width:100%;text-align:left;margin-left:0;background-color:#fff; border-width: 0.5px; margin-top: 40px;">

      <p style="font-size:12px; color:#6d6d6d">
        <br />
        Essa mensagem foi enviada para ${emailTratado} a seu pedido.<br />
        Para ajudar a manter sua conta segura, não encaminhe este email e nem compartilhe este código.
      </p>
   `;

  const textEmail = `
      Ação solicitada: Troque sua senha na Plataforma de Treinos

      Olá ${firstnameTratado},

      Você solicitou a troca de senha na Plataforma de Treinos.<br />
      Para trocar a sua senha, basta acessar a página de troca de senhas, escolher uma nova senha e inserir o seu código de recuperação.
      PS: Esse link só ficará válido por 1 dia.

      ${recoveryUrl}

      Talvez você precise inserir este código de recuperação:

      ${recoveryCode}

      Se você não solicitou uma nova senha, avise-nos:

      ${reportUrl}

      Essa mensagem foi enviada para ${emailTratado} a seu pedido.
      Para ajudar a manter sua conta segura, não encaminhe este email e nem compartilhe este código.
    `;

  const queryMailSender = await sendMail({
    sender,
    toMail,
    subject,
    htmlEmail,
    textEmail,
  });

  if (queryMailSender.error) {
    return {
      error: queryMailSender.error,
    };
  }
  return {
    ...queryMailSender,
  };
}
