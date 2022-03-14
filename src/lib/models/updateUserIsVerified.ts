import { query } from 'src/lib/utils/db';

const updateIsVerified = async (email: string) => {
  const emailTratado = email.toLowerCase();
  try {
    await query(
      `
      UPDATE users
      SET is_verified = CURRENT_TIMESTAMP
      WHERE email = ?
      `,
      emailTratado,
    );
    return {
      ok: true,
    };
  } catch (e: any) {
    return {
      error: e.message,
    };
  }
};
export default updateIsVerified;
