//shared components
import MyHead from 'src/components/MyHead/index';
//General Pages templates
import LoadingTemplate from 'src/templates/commons/Loading/index';
//hooks
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAppDispatch } from 'src/lib/hooks/useRedux';
//fetcher
import verifyCode from 'src/lib/chains/verifyCode';
import createVisit from 'src/lib/fetchers/visits/create/index';
//reducers
import { add } from 'src/reducers/visit/index';
import { putAlert } from 'src/reducers/alert/index';
//types
import type VisitData from 'src/types/VisitData';

export default function Confirmar() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const visitedPagePath = router.pathname;
  const [_visit, setVisit] = useState<VisitData>();

  useEffect(() => {
    createVisit(visitedPagePath).then((visitResult) => {
      if (visitResult) {
        dispatch(add(visitResult)), setVisit(visitResult);
      }
    });
  }, [dispatch, visitedPagePath]);

  const params = router.query.params;
  useEffect(() => {
    if (!params) {
      return;
    }
    const email = params[0];
    const verificationCode = params[1];
    const hashFragment = params[2];
    const magicToken = params[3];
    let messageTimeout: any;

    verifyCode({
      verificationCode,
      hashFragment,
      email,
      magicToken,
      fromLink: true,
    }).then((result) => {
      if (result?.error) {
        dispatch(
          putAlert({
            content: {
              message: result?.error,
              severity: 'error',
              duration: 8000,
              show: true,
            },
          }),
        );
        messageTimeout = setTimeout(() => {
          router.push('/confirmar');
        }, 1500);
        return;
      }
      dispatch(
        putAlert({
          content: {
            message: 'E-mail validado com sucesso',
            severity: 'success',
            duration: 8000,
            show: true,
          },
        }),
      );
      clearTimeout(messageTimeout);
      messageTimeout = setTimeout(() => {
        router.push('/painel');
      }, 1500);
      return () => {
        clearTimeout(messageTimeout);
      };
    });
  }, [params, router, dispatch]);

  return (
    <MyHead>
      <LoadingTemplate>Carregando, aguarde...</LoadingTemplate>
    </MyHead>
  );
}

/*
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import verifyCode from 'src/lib/chains/verifyCode';
import LoadingTemplate from 'src/templates/commons/Loading';
import { useAppDispatch } from 'src/lib/hooks/useRedux';
import { putAlert } from 'src/reducers/alert/index';

export default function Confirmar() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const params = router.query.params;
  useEffect(() => {
    if (!params) {
      return;
    }
    const email = params[0];
    const verificationCode = params[1];
    const hashFragment = params[2];
    const magicToken = params[3];
    let messageTimeout: any;

    verifyCode({
      verificationCode,
      hashFragment,
      email,
      magicToken,
      fromLink: true,
    }).then((result) => {
      if (result?.error) {
        dispatch(
          putAlert({
            content: {
              message: result?.error,
              severity: 'error',
              duration: 8000,
              show: true,
            },
          }),
        );
        messageTimeout = setTimeout(() => {
          router.push('/confirmar');
        }, 1500);
        return;
      }
      dispatch(
        putAlert({
          content: {
            message: 'E-mail validado com sucesso',
            severity: 'success',
            duration: 8000,
            show: true,
          },
        }),
      );
      clearTimeout(messageTimeout);
      messageTimeout = setTimeout(() => {
        router.push('/painel');
      }, 1500);
      return () => {
        clearTimeout(messageTimeout);
      };
    });
  }, [params, router, dispatch]);

  return (
    <LoadingTemplate>Carrengando, aguarde...</LoadingTemplate>
  );
}
*/
