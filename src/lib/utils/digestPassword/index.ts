import { hash } from 'bcrypt';

type QueryResult = {
  return?: string;
  errorMessage?: string;
  appMessage?: string;
  ok?: boolean;
};

export default async function digestPassword(
  password: string,
): Promise<QueryResult> {
  const saltRounds: number = parseInt(
    process.env.PASSWORD_SALT_ROUNDS as string,
  );

  try {
    const digestedPassword = await hash(password, saltRounds);
    return { return: digestedPassword, ok: true };
  } catch (err: any) {
    return {
      errorMessage: `in digestPassword: ${err.message}`,
      appMessage: `Falha no algorismo de criptografia, tente novamente mais tarde`,
    };
  }
}
