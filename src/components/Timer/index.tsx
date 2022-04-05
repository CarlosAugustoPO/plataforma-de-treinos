import { useEffect, useRef, useState } from 'react';

type Props = {
  restartCounter: boolean | undefined;
  initialTime: number;
};
const Timer = ({ restartCounter, initialTime }: Props) => {
  initialTime = initialTime / 1000;
  const [timer, setTimer] = useState(initialTime);
  const interval: any = useRef(null);
  useEffect(() => {
    clearInterval(interval.current);
    interval.current = setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clearInterval(interval.current);
  }, [restartCounter]);

  useEffect(() => {
    if (timer === 0) {
      setTimer(initialTime);
      clearInterval(interval.current);
    }
  }, [timer, initialTime]);

  return <span>{timer}</span>;
};

export default Timer;
