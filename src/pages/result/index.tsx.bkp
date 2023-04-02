import { useRouter } from 'next/router';
import EmailRedirectButton from 'src/components/EmailRedirectButton';
import { fetchGetJSON } from 'src/lib/utils/apiHelpers';
import {
  formatAmountForDisplay,
  formatAmountFromStripe,
} from 'src/lib/utils/stripeHelpers';
import useSWR from 'swr';

const ResultPage = () => {
  const router = useRouter();

  const { data, error } = useSWR(
    router.query.session_id
      ? `/api/checkout_sessions/${router.query.session_id}`
      : null,
    fetchGetJSON,
  );

  if (!error && data?.payment_intent?.status !== 'succeeded') {
    return <div>loading...</div>;
  }

  if (
    error ||
    data?.payment_intent?.status === 'requires_payment_method'
  ) {
    return (
      <div className="page-container">
        <h1>Pagamento Falhou</h1>
        <p>O pagamento falhou. Por favor, tente novamente.</p>
      </div>
    );
  }

  let moneyPaid = formatAmountFromStripe(
    data?.payment_intent?.amount_received,
    'BRL',
  );
  moneyPaid = formatAmountForDisplay(moneyPaid, 'BRL');

  return (
    <div className="page-container">
      <h1>Confirmado</h1>
      <p>
        Você agendou uma avaliação física com Carlos Augusto.
      </p>
      <ul>
        <li>Data: {data?.metadata.date ?? 'loading...'}</li>
        <li>Horário: {data?.metadata.time ?? 'loading...'}</li>
        <li>Local: {data?.metadata.location ?? 'loading...'}</li>
        <li>
          Nome do cliente:{' '}
          {data?.metadata.clientName ?? 'loading...'}
        </li>
        <li>
          Email do cliente:{' '}
          {data?.metadata.clientEmail ?? 'loading...'}
        </li>

        {data.metadata.plusInfo ? (
          <li>
            Informações Adicionais:{' '}
            {data?.metadata.plusInfo ?? 'loading...'}
          </li>
        ) : (
          <li>Sem Informações Adicionais</li>
        )}
        {data.metadata.accompanimentName ? (
          <>
            <li>
              Nome do acompanhante:{' '}
              {data?.metadata.accompanimentName ?? 'loading...'}
            </li>
            <li>
              Email do acompanhente:{' '}
              {data?.metadata.accompanimentEmail ?? 'loading...'}
            </li>
          </>
        ) : (
          <li>Sem acompanhante</li>
        )}
      </ul>
      <div className="receipt">
        <h3>Recibo de Pagamento</h3>
        <p>Valor Pago: {moneyPaid ?? 'loading...'}</p>
      </div>
      <p>
        Um convite para o calendário e um recibo foram enviados
        para {data.customer_email}.
      </p>
      <div>
        <EmailRedirectButton email={data.customer_email} />
      </div>
    </div>
  );
};

export default ResultPage;
