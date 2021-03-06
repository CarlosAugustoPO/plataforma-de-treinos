import sendMail from 'src/lib/fetchers/mail/sender';
import getUser from 'src/lib/fetchers/user/get';
import getMagicToken from 'src/lib/fetchers/mail/getMagicToken';
import capitalize from 'src/lib/utils/tratarNome';

export async function sendVerificationMail(email: string) {
  const emailTratado = email.toLowerCase();

  const magicToken = await getMagicToken(emailTratado);
  if (magicToken.error) {
    return {
      error: magicToken.error,
    };
  }

  const user = await getUser({
    email: emailTratado,
    fieldsToGet: [
      'verification_code',
      'fname',
      'fragment_hash_password',
    ],
  });
  if (user.error) {
    return {
      error: user.error,
    };
  }

  const verificationCode = user.verification_code;
  const hashFragment = user.fragment_hash_password;

  const fname = user.fname;
  const firstnameTratado = capitalize(fname);

  const url = process.env.NEXT_PUBLIC_URL;
  const confirmationUrl = `${url}/confirm/${emailTratado}/${verificationCode}/${hashFragment}/${magicToken.result}`;

  const sender =
    'Plataforma de Treinos <cadastro@plataformadetreinos.com.br>';
  const toMail = emailTratado;
  const subject = `${verificationCode} é o seu código de confirmação na Plataforma de Treinos`;
  const htmlEmail = `
      <h1 style="color:#394a7d; font-size:18px;">Ação necessária: confirme sua conta na Plataforma de Treinos</h1>

      <hr style="width:100%;text-align:left;margin-left:0;background-color:#fff; border-width: 0.5px;">

      <p style="font-size:15px;">
        Olá ${firstnameTratado},
      </p>

      <p style="font-size:15px;">
        Você se registrou recentemente na Plataforma de Treinos.<br />
        Para concluir seu registro basta confirmar a sua conta.
      </p>

      <div style="font-size:15px; margin-top:30px; margin-bottom:30px">
        <a
          href="${confirmationUrl}"
          style="background:#394a7d;
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
          CONFIRMAR CONTA
        </a>
      </div>

      <p style="font-size:15px;">
        Talvez você precise inserir suas credenciais e este número de confirmação:
      </p>

      <p style="font-size:15px;">
        <br />
        <span
          style="border:1px solid #394a7d;
            background-color:#394a7d5e;
            padding:10px 26px;
            border-radius: 4px;
          "
        >
          ${verificationCode}
        </span>
      </p>

      <hr style="width:100%;text-align:left;margin-left:0;background-color:#fff; border-width: 0.5px; margin-top: 40px;">

      <p style="font-size:12px; color:#6d6d6d">
        <br />
        Essa mensagem foi enviada para ${emailTratado} a seu pedido.<br />
        Para ajudar a manter sua conta segura, não encaminhe este email e nem compartilhe este código.
      </p>
   `;

  const textEmail = `
      Ação necessária: confirme sua conta na Plataforma de Treinos.

      Olá ${firstnameTratado},

      Você se registrou recentemente na Plataforma de Treinos.
      Para confirmar sua conta e concluir seu registro basta clicar no link abaixo:

      ${confirmationUrl}

      Talvez você precise inserir suas credencias e este número de confirmação:

      ${verificationCode}

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
    ok: 'Email enviado com sucesso',
  };
}
