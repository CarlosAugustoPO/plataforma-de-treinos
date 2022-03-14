type Props = {
  sender: string;
  toMail: string;
  subject: string;
  htmlEmail: string;
  textEmail: string;
};

export default async function sendMail({
  sender,
  toMail,
  subject,
  htmlEmail,
  textEmail,
}: Props) {
  const charSet = 'UTF-8';
  const queryMailSender = await fetch(
    'https://h6pynl14o5.execute-api.sa-east-1.amazonaws.com/prod',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender,
        toMail,
        subject,
        charSet,
        htmlEmail,
        textEmail,
      }),
    },
  );

  const queryMailSenderResponse = await queryMailSender.json();
  if (queryMailSenderResponse == null) {
    return {
      ok: 'sucess',
    };
  } else {
    return {
      error: queryMailSenderResponse.errorMessage,
    };
  }
}
