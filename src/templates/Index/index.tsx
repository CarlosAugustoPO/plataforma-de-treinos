//My components
import Caption from 'src/components/Caption/index';
import TextButton from 'src/components/TextButton/index';
import Form from 'src/components/Form/index';
import EmailField from 'src/components/Form/EmailField/index';
import SendButton from 'src/components/Form/SendButton/index';
import FullNameField from 'src/components/Form/FullNameField/index';
import Title from 'src/components/Title/index';
import Text from 'src/components/Text/index';
import ModalPoliticasDeDados from 'src/components/Modals/PoliticasDeDados/index';
import ModalTermosPreUser from 'src/components/Modals/TermosPreUser/index';
import MyCard from 'src/components/Card/index';
//Mui Components
import AnnouncementTwoToneIcon from '@mui/icons-material/AnnouncementTwoTone';
//Hooks
import { useForm } from 'react-hook-form';
import { useState } from 'react';

export default function IndexTemplate() {
  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function handleErrors() {
    clearErrors();
  }

  async function handleSignIn(data: any) {
    setSubmitting(true);
    const email = data.email;
    const fullName = data.fullName;
    const preUser = {
      email,
      fullName,
    };
    if (!preUser) {
      setGeneralError('Falha em registrar pre user');
    }
    setOkResult('Registrado com sucesso');
    setSubmitting(false);
  }

  const [submitting, setSubmitting] = useState(false);
  const [generalError, setGeneralError] = useState<
    undefined | string
  >(undefined);
  const [okResult, setOkResult] = useState<undefined | string>(
    undefined,
  );
  const [modalTermos, setModalTermos] = useState(false);
  const [modalPoliticas, setModalPoliticas] = useState(false);
  return (
    <MyCard>
      <ModalTermosPreUser
        isOpen={modalTermos}
        setOpen={setModalTermos}
      />
      <ModalPoliticasDeDados
        isOpen={modalPoliticas}
        setOpen={setModalPoliticas}
      />
      <AnnouncementTwoToneIcon
        color="warning"
        sx={{ fontSize: 60 }}
      />
      <Title gutterBottom>Site em construção</Title>
      <Text paragraph>
        A Plataforma de Treinos está em construção, mas falta bem
        pouquinho para você poder utiliza-la! Essa nova versão da
        consultoria em exercício físico está com novidades
        incríveis, estamos trabalhando bastante para oferecer a
        melhor experiência para você.
      </Text>
      <Text>
        Assine a lista de lançamento para ficar sabendo assim que
        a Plataforma de Treinos estiver pronta.
      </Text>
      <Form
        handleSubmit={handleSubmit}
        handleSignIn={handleSignIn}
      >
        <EmailField
          errors={errors.email?.type}
          clearErrors={clearErrors}
          setGeneralError={setGeneralError}
          setOkResult={setOkResult}
          register={register}
        />
        <FullNameField
          errors={errors.fullName?.type}
          clearErrors={clearErrors}
          setGeneralError={setGeneralError}
          setOkResult={setOkResult}
          register={register}
        />
        {generalError && (
          <Text
            color="error"
            align="left"
            variant="subtitle2"
            fontSize="80%"
          >
            {generalError}
          </Text>
        )}
        {okResult && (
          <Text
            color="success.main"
            align="left"
            variant="subtitle2"
            fontSize="80%"
          >
            {okResult}
          </Text>
        )}
        <SendButton
          sx={{ marginTop: '2%' }}
          enviar="INSCREVA-SE"
          submitting={submitting}
          onClick={handleErrors}
        />
        <Caption mt={3}>
          Ao inscrever-se você está de acordo com as seguintes e
          com os seguintes{' '}
          <TextButton
            cta="termos de uso"
            onClick={() => setModalTermos(true)}
          />{' '}
          e com nossas{' '}
          <TextButton
            cta="politicas de dados"
            onClick={() => setModalPoliticas(true)}
          />
          .
        </Caption>
      </Form>
    </MyCard>
  );
}
