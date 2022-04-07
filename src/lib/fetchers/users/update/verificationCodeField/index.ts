import Ok from "src/types/Ok";

export default async function updateUsersVerificationCodeField(
  email: string
): Promise<Ok> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/users/patch/verification-code-field`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
      }),
    }
  );
  const jsonResponse = await response.json();
  return jsonResponse;
}
