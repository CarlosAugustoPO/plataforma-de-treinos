export default async function sendMail(mailProps: {
  sender: string;
  toMail: string;
  subject: string;
  htmlEmail: string;
  textEmail: string;
}) {
  const queryMailSender: Response = await fetch(
    'https://h6pynl14o5.execute-api.sa-east-1.amazonaws.com/prod',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sesHash: process.env.NEXT_PUBLIC_SES_HASH,
        sender: mailProps.sender,
        toMail: mailProps.toMail,
        subject: mailProps.subject,
        htmlEmail: mailProps.htmlEmail,
        textEmail: mailProps.textEmail,
      }),
    },
  );

  const queryMailSenderResponse = await queryMailSender.json();
  if (queryMailSenderResponse?.errorMessage) {
    console.log(queryMailSenderResponse.errorMessage);
  }

  return {
    ok: (queryMailSenderResponse.errorMessage as string)
      ? undefined
      : 'E-mail enviado com sucesso',
    error:
      (queryMailSenderResponse.errorMessage as string) ||
      undefined,
  };
}
