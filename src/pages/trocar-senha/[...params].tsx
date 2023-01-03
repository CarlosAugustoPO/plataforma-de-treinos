import readUser from 'src/lib/fetchers/users/read/index';
//shared components
import MyHead from 'src/components/MyHead/index';
//General Pages templates
import LoadingTemplate from 'src/templates/commons/Loading/index';
import TrocarSenhaTemplate from 'src/templates/unauth/TrocarSenha/index';
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
    let recoveryCode = params[2];

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
        recovery_code_date: true,
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
        router.push('/autenticar-troca-de-senha/' + email);
        return;
      }

      if (user.data?.recovery_code === null) {
        dispatch(
          putAlert({
            content: {
              message:
                'Solicitação de recuperação inexistente, faça uma nova solicitação',
              severity: `error`,
              duration: 8000,
              show: true,
            },
          }),
        );
        router.push(
          '/relembrar-email/' +
            email +
            '/solicitar-troca-de-senha',
        );
        return;
      }

      const requestDate: any = new Date(
        user.data?.recovery_code_date as Date,
      );
      const today: any = new Date();
      const diffTime = Math.abs(today - requestDate);
      const diffDays = Math.ceil(
        diffTime / (1000 * 60 * 60 * 24),
      );

      if (diffDays > 1) {
        dispatch(
          putAlert({
            content: {
              message:
                'Link de recuperação expirado, faça uma nova solicitação',
              severity: `error`,
              duration: 8000,
              show: true,
            },
          }),
        );
        router.push(
          '/relembrar-email/' +
            email +
            '/solicitar-troca-de-senha',
        );
        return;
      }

      if (user.data?.recovery_code != recoveryCode) {
        dispatch(
          putAlert({
            content: {
              message:
                'Falha em ler código de recuperação, tente inserir manualmente',
              severity: `error`,
              duration: 8000,
              show: true,
            },
          }),
        );
        router.push('/autenticar-troca-de-senha/' + email);
        return;
      }
      setParentEmail(email);
      setLinkIsValid(true);
    });
  }, [params, router, dispatch]);

  return (
    <MyHead>
      {linkIsValid ? (
        <TrocarSenhaTemplate email={parentEmail} />
      ) : (
        <LoadingTemplate>Carregando, aguarde...</LoadingTemplate>
      )}
    </MyHead>
  );
}
