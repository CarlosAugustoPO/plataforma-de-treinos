import type MagicLinkData from 'src/types/MagicLinksData';
import prisma from 'src/lib/vendor/prisma/index';

async function getMagicLinkModel(queryParams: {
  email: string;
}): Promise<MagicLinkData> {
  try {
    const magicToken = () => {};
    magicToken.data = await prisma.magic_links.findUnique({
      where: {
        user_email: queryParams.email,
      },
    });
    if (!magicToken) {
      return { error: 'Falha em localizar magic token' };
    }

    const mToken = magicToken.data.magic_token;
    const isDisabled = magicToken.data.is_disabled;
    const mTokenDate = magicToken.data.updated_at;
    const tokenDate: any = new Date(mTokenDate);
    const today: any = new Date();
    const diffTime = Math.abs(today - tokenDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays > 1) {
      return { error: 'Link mágico expirado' };
    }
    if (!mToken) {
      return { error: 'Falha em localizar token' };
    }
    if (isDisabled != null) {
      return {
        error: 'Esse link não é mais válido',
      };
    }
    magicToken.ok = 'Token localizado com sucesso';
    return magicToken;
  } catch (e: any) {
    console.log('In getMagicLinkModel: ', e.message, e.code);
    return { error: e.message };
  }
}

export default getMagicLinkModel;
