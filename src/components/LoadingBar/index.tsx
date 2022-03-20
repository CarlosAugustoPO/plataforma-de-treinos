import NProgress from 'nprogress';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

type Props = {
  children?: React.ReactNode;
};

export default function LoadingBar({ children }: Props) {
  const router = useRouter();
  useEffect(() => {
    const handleStart = (url: any) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = () => {
      NProgress.done();
    };

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
  }, [router]);
  return <>{children}</>;
}
