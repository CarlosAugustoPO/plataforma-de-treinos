import { sendVerificationMail } from '../mail/sendVerificationMail';

const mailer = {
  send: {
    verificationMail: async (email: string) => {
      const sendVerificationMailResult =
        await sendVerificationMail(email);
    },
  },
};
export default mailer;
