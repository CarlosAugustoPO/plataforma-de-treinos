import type VisitData from 'src/types/VisitData';

export default async function createVisit(
  visitedPagePath: string,
): Promise<VisitData> {
  const createVisit: Response = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/visit/create`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(visitedPagePath),
    },
  );
  const visit = await createVisit.json();
  return visit;
}
