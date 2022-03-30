import type VisitDataOrError from 'src/types/VisitDataOrError';

export default async function fetchCreateVisit(
  visitedPagePath: string,
): Promise<VisitDataOrError> {
  const createVisitResponse = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/visit/create`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(visitedPagePath),
    },
  );
  if (createVisitResponse.status !== 200) {
    return {
      error:
        'Falha em comunicar com a API de visitantes, tente novamente mais tarde ou entre em contato com nossa equipe através do email suporte@plataformadetreinos.com.br',
    };
  }
  const visit: VisitDataOrError =
    await createVisitResponse.json();
  return visit;
}
