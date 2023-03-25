import React from "react";

const EmailRedirect = ({ email }) => {
  const domain = email.split("@")[1];
  let emailUrl;

  switch (domain) {
    case "gmail.com":
      emailUrl =
        "https://mail.google.com/mail/u/0/#search/prof.carlos.aug%40gmail.com";
      break;
    case "hotmail.com":
      emailUrl =
        "https://outlook.live.com/mail/inbox/search?query=prof.carlos.aug%40hotmail.com";
      break;
    case "outlook.com":
      emailUrl =
        "https://outlook.live.com/mail/inbox/search?query=prof.carlos.aug%40outlook.com";
      break;
    case "yahoo.com.br":
      emailUrl = "https://mail.yahoo.com/d/search/p=prof.carlos.aug@yahoo.com";
      break;
    case "terra.com.br":
      emailUrl =
        "https://login.terra.com.br/?returnURL=https%3A%2F%2Fmail.terra.com.br%2F%3FauthError%3Dtrue%26bAuthError%3Dtrue&authError=true&bAuthError=true";
      break;
    case "uol.com.br":
      emailUrl =
        "https://email.uol.com.br/?log=out&no_check=1&skin=skin2&lang=pt-BR&mode=black&guest=0&trayonly=0&horiz_scroll=0";
      break;
    case "icloud.com":
      emailUrl = "https://www.icloud.com/mail/";
      break;
    default:
      emailUrl = "";
  }

  const redirectToEmail = () => {
    window.open(emailUrl, "_blank");
  };

  return (
    <div>
      <button onClick={redirectToEmail}>Ir para o {domain}</button>
    </div>
  );
};

export default EmailRedirect;
