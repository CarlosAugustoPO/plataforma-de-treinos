import Caption from 'src/components/Caption/index';
import TextButton from 'src/components/TextButton/index';
import { useEffect, useState } from 'react';
import Timer from 'src/components/Timer/index';

export default function TimerTextButton(props: {
  initialTime: number;
  onClick: any;
  cta: string;
}) {
  const [deadLine, setDeadLine] = useState(false);
  const [initialTime, setInitialTime] = useState(
    props.initialTime,
  );
  const [restartCounter, setRestartCounter] = useState<
    boolean | undefined
  >(undefined);

  async function handleOnClick() {
    props.onClick();
    setRestartCounter(true);
    setInitialTime(props.initialTime);
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

  return (
    <>
      {deadLine && (
        <TextButton
          linkColor="pinkLinkInt"
          cta={props.cta}
          onClick={handleOnClick}
          href=""
          fontSize="90%"
        />
      )}
      {!deadLine && (
        <>
          <TextButton
            linkColor="disabled"
            cta={props.cta}
            fontSize="90%"
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
            />
            )
          </Caption>
        </>
      )}
    </>
  );
}
