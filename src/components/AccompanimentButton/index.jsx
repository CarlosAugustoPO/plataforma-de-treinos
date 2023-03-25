import React, { useState } from 'react';
import {
  Typography,
  Button,
  TextField,
  Box,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function AccompanimentButton({
  accompanimentName,
  setAccompanimentName,
  accompanimentEmail,
  setAccompanimentEmail,
}) {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setAccompanimentName('');
    setAccompanimentEmail('');
  };

  return (
    <>
      {showForm ? (
        <>
          <Typography
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
          </Typography>

          <TextField
            sx={{ width: '95%', m: '3% 2.5% 0 2.5%' }}
            label="Nome do acompanhante"
            autoFocus={true}
            required={showForm}
            variant="outlined"
            fullWidth
            value={accompanimentName}
            placeholder="Por favor, informe o nome de seu acompanhante"
            onChange={(e) =>
              setAccompanimentName(e.target.value)
            }
          />
          <TextField
            sx={{ width: '95%', m: '3% 2.5% 0 2.5%' }}
            label="Email do acompanhante"
            fullWidth
            required={showForm}
            variant="outlined"
            value={accompanimentEmail}
            placeholder="Por favor, informe o e-mail de seu acompanhante"
            onChange={(e) =>
              setAccompanimentEmail(e.target.value)
            }
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
