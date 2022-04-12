// import readUser from 'src/lib/fetchers/users/read/index';
// import type Session from 'src/types/Session';
// import type Ok from 'src/types/Ok';
// import { compare } from 'bcrypt';
//
// export default async function compareUserPassword(props: {
//   insertedPassword: string;
//   session: Session;
// }): Promise<Ok> {
//   const email = props?.session?.user?.email as string;
//   if (!props.insertedPassword || !props.session) {
//     return { error: 'Missing props' };
//   }
//
//   const user = await readUser({
//     email: email,
//     select: { password: true },
//   });
//
//   if (user.error) {
//     return {
//       error: user.error,
//     };
//   }
//
//   const userPassword = user?.data?.password as string;
//   const match = await compare(
//     props.insertedPassword,
//     userPassword,
//   );
//
//   console.log(userPassword, props.insertedPassword);
//   return { ok: true };
// }
