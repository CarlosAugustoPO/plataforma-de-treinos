import prisma from 'src/lib/vendor/prisma/index';
import formatDate from 'src/lib/utils/formatDate';
import type UserData from 'src/types/UserData';

async function getUserModel(queryParams: {
  email: string;
  select?: object;
}): Promise<UserData> {
  if (!queryParams.select) {
    try {
      const user = () => {};
      user.data = await prisma.users.findUnique({
        where: {
          email: queryParams.email,
        },
      });
      if (!user) {
        return { error: 'Falha em localizar usuário' };
      }
      if (user.data?.is_verified != null) {
        user.data.is_verified = formatDate(
          user.data.is_verified,
        );
      }
      user.ok = 'Usuário localizado com sucesso';
      return user;
    } catch (e: any) {
      console.log(
        'In getUsers whitout fields: ',
        e.message,
        e.code,
      );
      return { error: e.message };
    }
  }

  try {
    const user = () => {};
    user.data = await prisma.users.findUnique({
      where: {
        email: queryParams.email,
      },
      select: queryParams.select,
    });
    if (!user.data) {
      return { error: 'Falha em localizar usuário' };
    }
    if (user.data.is_verified != null) {
      user.data.is_verified = formatDate(user.data.is_verified);
    }
    user.ok = 'Usuário localizado com sucesso';
    return user;
  } catch (e: any) {
    console.log('In getUser whit fields: ', e.message, e.code);
    return { error: e.message };
  }
}
export default getUserModel;
