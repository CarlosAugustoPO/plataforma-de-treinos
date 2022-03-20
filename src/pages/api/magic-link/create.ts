import { NextApiHandler } from 'next';
import insertMagicToken from 'src/lib/models/insertMagicToken';

const createToken: NextApiHandler = async (req, res) => {
  const email = req.body;
  if (!email) {
    return res.status(500).json({
      error:
        'Falha interna de comunicação. Tente novamente mais tarde ou informe o serviço técnico através do email suporte@plataformadetreinos.com.br',
    });
  }
  const insertMagicTokenResult = await insertMagicToken({
    email,
  });
  if (insertMagicTokenResult.error) {
    return res.status(400).json({
      ...insertMagicTokenResult,
    });
  }

  return res.status(200).json({
    ...insertMagicTokenResult,
  });
};
export default createToken;
