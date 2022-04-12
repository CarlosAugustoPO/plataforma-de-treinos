import { useEffect, useRef, useState } from 'react';
import type { Dispatch, SetStateAction } from 'react';
type Props = {
  restartCounter?: boolean;
  initialTime: number;
  resetTimer?: boolean;
  setResetTimer: Dispatch<SetStateAction<boolean>>;
  setDisabled: Dispatch<SetStateAction<boolean>>;
};
const Timer = ({
  resetTimer,
  restartCounter,
  initialTime,
  setResetTimer,
  setDisabled,
}: Props) => {
  initialTime = initialTime / 1000;
  const [timer, setTimer] = useState(initialTime);
  const interval: any = useRef(null);
  useEffect(() => {
    clearInterval(interval.current);
    interval.current = setInterval(() => {
      if (resetTimer === true) {
        setTimer(initialTime + 1);
        setResetTimer(false);
        setDisabled(false);
      }
      setTimer((time) => time - 1);
    }, 1000);
    return () => clearInterval(interval.current);
  }, [
    restartCounter,
    setDisabled,
    setResetTimer,
    resetTimer,
    initialTime,
  ]);

  useEffect(() => {
    if (timer === 0) {
      setTimer(initialTime);
      clearInterval(interval.current);
    }
  }, [timer, initialTime]);

  return <span>{timer}</span>;
};

export default Timer;
