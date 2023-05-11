import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button } from '@mui/material';

export default function Home() {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setSubmitting(true);

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Something went wrong');
      }

      setSubmitting(false);
      alert('Form submitted successfully!');
    } catch (error) {
      console.log(error);
      setSubmitting(false);
      alert('Error submitting form');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="Circunferência de Quadril"
        variant="outlined"
        type="number"
        fullWidth
        error={!!errors.circunferenciaDeQuadril}
        helperText={errors.circunferenciaDeQuadril?.message}
        {...register('circunferenciaDeQuadril', {
          required: 'Campo obrigatório',
          min: { value: 0, message: 'Valor mínimo é 0' },
        })}
      />
      <TextField
        label="Circunferência de Panturrilha"
        variant="outlined"
        type="number"
        fullWidth
        error={!!errors.circunferenciaDePanturrilha}
        helperText={errors.circunferenciaDePanturrilha?.message}
        {...register('circunferenciaDePanturrilha', {
          required: 'Campo obrigatório',
          min: { value: 0, message: 'Valor mínimo é 0' },
        })}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        disabled={submitting}
        style={{ marginTop: 16 }}
      >
        {submitting ? 'Enviando...' : 'Enviar'}
      </Button>
    </form>
  );
}
