import CircularProgress from '@mui/material/CircularProgress';
import Caption from 'src/components/Caption/index';
import TextButton from 'src/components/TextButton/index';
import { useEffect, useState } from 'react';
import Timer from 'src/components/Timer/index';
import type { Dispatch, SetStateAction } from 'react';

export default function TimerTextButton(props: {
  initialTime: number;
  onClick: any;
  cta: string;
  submitting?: string;
  fontSize?: string;
  resetTimer?: boolean;
  setResetTimer: Dispatch<SetStateAction<boolean>>;
}) {
  const [deadLine, setDeadLine] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [initialTime, setInitialTime] = useState(
    props.initialTime,
  );
  const [restartCounter, setRestartCounter] = useState<
    boolean | undefined
  >(undefined);

  async function handleOnClick() {
    setDisabled(true);
    await props.onClick().then(() => {
      setDisabled(false);
      setRestartCounter(true);
      setInitialTime(props.initialTime);
    });
  }

  useEffect(() => {
    let timeout: any;
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      setDeadLine(true);
    }, initialTime);
    if (props.resetTimer === true) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setDeadLine(true);
      }, initialTime);
    }
    return () => {
      clearTimeout(timeout);
      setDeadLine(false);
      setRestartCounter(undefined);
    };
  }, [restartCounter, initialTime, props.resetTimer]);

  return (
    <>
      {deadLine && !disabled && (
        <TextButton
          linkColor="pinkLinkWithoutRouter"
          cta={props.cta}
          onClick={handleOnClick}
          fontSize={props.fontSize || '95%'}
        />
      )}
      {(!deadLine || disabled) && (
        <>
          {!disabled && (
            <>
              <TextButton
                linkColor="disabled"
                cta={props.cta}
                fontSize={props.fontSize || '95%'}
              />
              <Caption
                sx={{
                  fontSize: '80%',
                  color: 'disabled.main',
                }}
              >
                {' '}
                (
                <Timer
                  restartCounter={restartCounter}
                  initialTime={initialTime}
                  resetTimer={props.resetTimer}
                  setResetTimer={props.setResetTimer}
                  setDisabled={setDisabled}
                />
                )
              </Caption>
            </>
          )}
          {disabled && (
            <>
              <TextButton
                linkColor="disabled"
                cta={props.submitting || 'Enviando, aguarde...'}
                fontSize={props.fontSize || '95%'}
              />{' '}
              <CircularProgress
                size={12}
                sx={{
                  color: 'disabled.main',
                }}
              />
            </>
          )}
        </>
      )}
    </>
  );
}
