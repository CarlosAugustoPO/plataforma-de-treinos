export default async function sendMail(mailProps: {
  sender: string;
  toMail: string;
  subject: string;
  htmlEmail: string;
  textEmail: string;
}) {
  const response = await fetch(
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

  const jsonResponse = await response.json();
  if (jsonResponse?.errorMessage) {
    console.log(jsonResponse.errorMessage);
  }

  return {
    ok: (jsonResponse?.errorMessage as string)
      ? undefined
      : 'E-mail enviado com sucesso',
    error: (jsonResponse?.errorMessage as string) || undefined,
  };
}
