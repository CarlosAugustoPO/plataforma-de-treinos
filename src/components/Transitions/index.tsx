import { forwardRef } from 'react';
import Slide, { SlideProps } from '@mui/material/Slide';
type TransitionProps = Omit<SlideProps, 'direction'>;

export const TransitionDown = forwardRef<
  HTMLDivElement,
  TransitionProps
>(function TransitionLeft(props, ref) {
  return <Slide {...props} ref={ref} direction="down" />;
});

export const TransitionUp = forwardRef<
  HTMLDivElement,
  TransitionProps
>(function TransitionLeft(props, ref) {
  return <Slide {...props} ref={ref} direction="up" />;
});

export const TransitionLeft = forwardRef<
  HTMLDivElement,
  TransitionProps
>(function TransitionLeft(props, ref) {
  return <Slide {...props} ref={ref} direction="left" />;
});
