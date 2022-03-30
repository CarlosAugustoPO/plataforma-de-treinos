import type Error from 'src/types/Error';
import type VisitData from 'src/types/VisitData';

type VisitDataOrError = VisitData & Error;
export default VisitDataOrError;
