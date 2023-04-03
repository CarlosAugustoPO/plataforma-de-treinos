import fetch from 'node-fetch';

export default async function handler(req, res) {
  const { url } = req.query; // Obtém o parâmetro de rota `url`
  
  try {
    const response = await fetch(url);
    const content = await response.text();
    res.status(200).json({ content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Ocorreu um erro ao obter o conteúdo da página.' });
  }
}