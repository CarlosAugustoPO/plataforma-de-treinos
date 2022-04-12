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
  id?: string;
}) {
  return (
    <form
      id={props.id || 'form'}
      style={{
        maxWidth: '600px',
        width: '100%',
        margin: 'auto',
        ...props.style,
      }}
      noValidate
      onSubmit={props.handleSubmit(props.handleAction)}
    >
      <Grid container rowSpacing={3} p={1}>
        {props.children}
      </Grid>
    </form>
  );
}
