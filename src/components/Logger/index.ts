import formatDate from 'src/lib/utils/formatDate';

type Props = {
  errorMessage: string;
  errorBodyComplement: string;
  errorType:
    | 'Error'
    | 'Info'
    | 'Debug'
    | 'Warn'
    | 'Fatal'
    | 'Silent'
    | 'Trace';
};
const Logger = ({
  errorType,
  errorMessage,
  errorBodyComplement,
}: Props): void => {
  // Call whith a useEffect when Logx prevent doble send email in
  // pages

  let dateNow = formatDate(new Date());
  let CustomError = new Error();
  CustomError.name = errorType; //change error Prototype name defaul 'Error: '
  CustomError.message = `${errorMessage} (${dateNow} BR)`; //change error Prototype name defaul 'Error: '

  console.log(CustomError);
  // Send to email Fatal, Error, Warn, Info
  // Silent Debug, Trace, Silent
  // try {
  //   throw CustomError;
  // } catch (e: any) {
  //   if (errorType === 'Fatal' || errorType === 'Error') {
  //     console.error(e.stack + errorBodyComplement);
  //     console.log({
  //       name: `${e.name}`,
  //       message: `${e.message}`,
  //       body: `${e.stack} ${errorBodyComplement}`,
  //     });
  //   } else if (errorType === 'Warn') {
  //     console.log(
  //       `%c${e.stack} ${errorBodyComplement}`,
  //       'color: #ffb86c;',
  //     );
  //     console.log({
  //       name: `${e.name}`,
  //       message: `${e.message}`,
  //       body: `${e.stack} ${errorBodyComplement}`,
  //     });
  //   } else if (errorType === 'Info') {
  //     console.log(
  //       `%c${e.name}: ${e.message}. ${errorBodyComplement}`,
  //       'color: #8be9fd;',
  //     );
  //     console.log({
  //       name: `${e.name}`,
  //       message: `${e.message}`,
  //       body: `${e.name} ${e.message}. ${errorBodyComplement}`,
  //     });
  //   } else if (errorType === 'Debug') {
  //     console.log(
  //       `%c${e.name}: ${e.message}. ${errorBodyComplement}`,
  //       'color: #f1fa8c;',
  //     );
  //   } else if (errorType === 'Trace') {
  //     console.log(
  //       `%c${e.stack} ${errorBodyComplement}`,
  //       'color: #ff79c6;',
  //     );
  //   } else if (errorType === 'Silent') {
  //     return;
  //   } else {
  //     console.log(`%c${e} 'color: #8be9fd'`);
  //   }
  // }
};

export default Logger;

// {{{ Unused code
// class CustomError extends Error {
//   constructor(
//     errorType: string,
//     errorMessage: string,
//     ...params: any
//   ) {
//     super(...params);
//
//     if (Error.captureStackTrace) {
//       Error.captureStackTrace(this, CustomError);
//     }
//
//     let dateNow = formatDate(new Date());
//     this.name = `(${errorType}) ${errorMessage} at ${dateNow}`;
//   }
// }
