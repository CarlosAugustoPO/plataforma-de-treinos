import { useState, useEffect, useRef } from 'react';

export default function useDebounce(fn: any, delay: any) {
  const timeoutRef: any = useRef(null);

  function debouncedFn(...args: any) {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }
  return debouncedFn;
}
