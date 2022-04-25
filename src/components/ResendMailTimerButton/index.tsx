import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Timer from 'src/components/Timer/index';
import styles from './styles.module.css';
import Typography from '@mui/material/Typography';

type Props = {
  email: string;
};

export default function ResendVerificationMailButton({
  email,
}: Props) {
  const [deadLine, setDeadLine] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [initialTime, setInitialTime] = useState(75000);
  const [sucessMessage, setSucessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [restartCounter, setRestartCounter] = useState<
    boolean | undefined
  >(undefined);

  async function handleResendEmail() {
    const resendVerificationMail = await fetch(
      '/api/mail/send-verification-mail',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
        }),
      },
    );
    const resendVerificationMailResult =
      await resendVerificationMail.json();
    if (!resendVerificationMailResult.ok) {
      setErrorMessage('Falha em reenviar código');
      return null;
    }
    setRestartCounter(true);
    setInitialTime(75000);
    setSucessMessage('sucess');
    return { ok: true };
  }

  useEffect(() => {
    let timeout: any;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setDeadLine(true);
    }, initialTime);
    return () => {
      clearTimeout(timeout);
      setDeadLine(false);
      setRestartCounter(undefined);
    };
  }, [restartCounter, initialTime]);

  useEffect(() => {
    let messageTimeout: any;
    clearTimeout(messageTimeout);
    messageTimeout = setTimeout(() => {
      setErrorMessage('');
      setSucessMessage('');
    }, 5000);
    return () => {
      clearTimeout(messageTimeout);
    };
  }, [errorMessage, sucessMessage]);

  return (
    <Grid
      container
      alignItems={'center'}
      direction={'column'}
      mt={3}
    >
      <Grid>
        {sucessMessage && (
          <Typography className={styles.sucessText}>
            (Código renviado com sucesso)
          </Typography>
        )}
        {errorMessage && (
          <Typography className={styles.errorText}>
            (Falha ao reenviar código.. tente novamente mais
            tarde)
          </Typography>
        )}{' '}
      </Grid>
      <Grid>
        <Button
          className={styles.bottomLinks}
          onClick={handleResendEmail}
          disabled={deadLine ? false : true}
        >
          Reenviar código de confirmação
          <span
            className={
              deadLine ? styles.hidden : styles.timerSpam
            }
          >
            (
            <Timer
              restartCounter={restartCounter}
              initialTime={initialTime}
              resetTimer={resetTimer}
              setResetTimer={setResetTimer}
              setDisabled={setDisabled}
            />
            )
          </span>
        </Button>
      </Grid>
    </Grid>
  );
}
