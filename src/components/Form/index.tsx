import Grid from '@mui/material/Grid';
import type {
  UseFormHandleSubmit,
  FieldValues,
} from 'react-hook-form';

export default function Form(props: {
  handleAction: <T>(data: T) => Promise<void>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  style?: {};
  children: React.ReactNode;
}) {
  return (
    <form
      style={{ maxWidth: '600px', width: '90%', ...props.style }}
      noValidate
      onSubmit={props.handleSubmit(props.handleAction)}
    >
      <Grid container rowSpacing={3} p={2}>
        {props.children}
      </Grid>
    </form>
  );
}
