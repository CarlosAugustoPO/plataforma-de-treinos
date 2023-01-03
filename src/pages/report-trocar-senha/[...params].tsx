import updateRecoveryCode from 'src/lib/fetchers/users/update/recoveryCodeFields/index';
import readUser from 'src/lib/fetchers/users/read/index';
//shared components
import MyHead from 'src/components/MyHead/index';
//General Pages templates
import LoadingTemplate from 'src/templates/commons/Loading/index';
import ReportTrocarSenhaTemplate from 'src/templates/unauth/ReportTrocarSenha/index';
//hooks
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { useAppDispatch } from 'src/lib/hooks/useRedux';
//fetcher
import createVisit from 'src/lib/fetchers/visits/create/index';
//reducers
import { add } from 'src/reducers/visit/index';
import { putAlert } from 'src/reducers/alert/index';
//types
import type VisitData from 'src/types/VisitData';
import { LOGIN_PAGE } from 'src/lib/utils/constants/index';

export default function Confirmar() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const visitedPagePath = router.pathname;
  const [linkIsValid, setLinkIsValid] = useState(false);
  const [parentEmail, setParentEmail] = useState('');
  useState('');
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
    const hashFragment = params[1];

    if (!email || !hashFragment) {
      dispatch(
        putAlert({
          content: {
            message: `Link inválido`,
            severity: 'error',
            duration: 8000,
            show: true,
          },
        }),
      );
      router.push(LOGIN_PAGE);
      return;
    }

    readUser({
      email: email,
      select: {
        fragment_hash_password: true,
        recovery_code: true,
      },
    }).then((user) => {
      if (user.error) {
        dispatch(
          putAlert({
            content: {
              message: `${user.error}`,
              severity: 'error',
              duration: 8000,
              show: true,
            },
          }),
        );
        return;
      }

      if (hashFragment !== user.data?.fragment_hash_password) {
        dispatch(
          putAlert({
            content: {
              message: 'Hash inválido',
              severity: `error`,
              duration: 8000,
              show: true,
            },
          }),
        );
        router.push(LOGIN_PAGE);
        return;
      }

      if (!user.data?.recovery_code) {
        dispatch(
          putAlert({
            content: {
              message:
                'Esse link para troca de senha não está mais ativo',
              severity: `error`,
              duration: 8000,
              show: true,
            },
          }),
        );
        router.push(LOGIN_PAGE);
        return;
      }

      const reset = true;
      updateRecoveryCode(email, reset).then((result) => {
        if (result.error) {
          dispatch(
            putAlert({
              content: {
                message: 'Falha em cancelar troca de senha',
                severity: `error`,
                duration: 8000,
                show: true,
              },
            }),
          );
        }
        dispatch(
          putAlert({
            content: {
              message:
                'Link para troca de senha cancelado com sucesso',
              severity: `success`,
              duration: 8000,
              show: true,
            },
          }),
        );
        setParentEmail(email);
        setLinkIsValid(true);
      });
    });
  }, [params, router, dispatch]);

  return (
    <MyHead>
      {linkIsValid ? (
        <ReportTrocarSenhaTemplate email={parentEmail} />
      ) : (
        <LoadingTemplate>Carregando, aguarde...</LoadingTemplate>
      )}
    </MyHead>
  );
}
