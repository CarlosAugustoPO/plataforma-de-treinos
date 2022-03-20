import type Error from 'src/types/Error';
import type Ok from 'src/types/Ok';

type Result = Error & Ok;

export default Result;
