import type VisitDataOrError from 'src/types/VisitDataOrError';

export default async function createVisit(
  visitedPagePath: string,
): Promise<VisitDataOrError> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/visits/post`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(visitedPagePath),
    },
  );
  if (response.status !== 200) {
    return {
      error:
        'Falha em comunicar com a API de visitantes, tente novamente mais tarde ou entre em contato com nossa equipe através do email suporte@plataformadetreinos.com.br',
    };
  }
  const visit = await response.json();
  return visit;
}
