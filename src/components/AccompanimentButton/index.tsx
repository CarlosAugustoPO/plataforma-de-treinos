import React, { useState } from 'react';
import Title from 'src/components/Title';
import type { Dispatch, SetStateAction } from 'react';
import FirstNameField from 'src/components/Form/FirstNameField';
import EmailField from 'src/components/Form/EmailField';
import { Button, Box } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function AccompanimentButton(props: {
  lastFieldError: string;
  errors: any;
  reset: (registerNames: {}, options: {}) => void;
  clearErrors: (registerName: string) => void;
  register: (registerName: string, validation: {}) => void;
  setLastFieldError: Dispatch<
    SetStateAction<string | undefined>
  >;
}) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    props.reset(
      { accompanimentName: '' },
      { keepErrors: false, keepDirty: false },
    );
  };

  return (
    <>
      {showForm ? (
        <>
          <Title
            variant="body1"
            align="center"
            alignSelf="center"
            sx={{
              selfAlign: 'center',
              textAlign: 'center',
              fontWeight: 'bold',
              mt: 1,
              mb: 0,
              '@media (max-width: 600px)': {
                mt: 2,
                mb: 0,
              },
            }}
          >
            Informe os dados do seu acompanhante
          </Title>

          <FirstNameField
            id="accompanimentName"
            label="Nome do acompanhante"
            mt="2.5%"
            mb="0%"
            width="95%"
            autoFocus={true}
            required={showForm}
            variant="outlined"
            errors={props.errors.accompanimentName?.type}
            clearErrors={props.clearErrors}
            setLastFieldError={props.setLastFieldError}
            lastFieldError={props.lastFieldError}
            register={props.register}
            placeholder="Por favor, informe o nome de seu acompanhante"
          />
          <EmailField
            id="accompanimentEmail"
            label="E-mail do acompanhante"
            mt="2.5%"
            mb="0%"
            width="95%"
            required={showForm}
            variant="outlined"
            errors={props.errors.accompanimentName?.type}
            clearErrors={props.clearErrors}
            setLastFieldError={props.setLastFieldError}
            lastFieldError={props.lastFieldError}
            register={props.register}
            placeholder="Por favor, informe o e-mail de seu acompanhante"
          />
          <Box
            mt={2}
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '95%',
              m: '3% 2.5% 0 2.5%',
            }}
          >
            <Button
              startIcon={<AddCircleOutlineIcon />}
              variant="text"
              color="success"
              onClick={handleClick}
              disabled
            >
              Acompanhante
            </Button>
            <Button
              onClick={handleCancel}
              sx={{ ml: 1 }}
              color="error"
            >
              Cancelar
            </Button>
          </Box>
        </>
      ) : (
        <Box
          mt={2}
          sx={{
            display: 'flex',
            justifyContent: 'flex-between',
            width: '95%',
            m: '3% 2.5% 0 2.5%',
          }}
        >
          <Button
            startIcon={<AddCircleOutlineIcon />}
            variant="outlined"
            color="secondary"
            onClick={handleClick}
          >
            Acompanhante
          </Button>
        </Box>
      )}
    </>
  );
}
