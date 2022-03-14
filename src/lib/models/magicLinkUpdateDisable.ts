import { query } from 'src/lib/utils/db';

const magicLinkUpdateDisabled = async (email: string) => {
  const emailTratado = email.toLowerCase();
  try {
    await query(
      `
        UPDATE magic_links
        SET is_disabled = CURRENT_TIMESTAMP
        WHERE user_email = ?
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
export default magicLinkUpdateDisabled;
