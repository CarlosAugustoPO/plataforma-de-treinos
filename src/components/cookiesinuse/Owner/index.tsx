import Caption from 'src/components/Caption';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

export default function OwnerCookies() {
  return (
    <Grid
      container
      columnSpacing={2}
      style={{
        padding: '2%',
        minWidth: '200px',
        textAlign: 'left',
      }}
    >
      {/* {{{ Owner 1*/}
      <Grid item xs={12}>
        <Caption sx={{ fontWeight: 600 }}>
          Cookie de configurações 1
        </Caption>{' '}
        <Divider />
      </Grid>

      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Nome:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>cookies.consent</Caption>{' '}
      </Grid>

      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Fornecedor:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>Plataforma de Treinos</Caption>{' '}
      </Grid>

      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Funcão:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>Salvar a preferência de cookies</Caption>{' '}
      </Grid>
      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Tipo:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>Local Storage</Caption>{' '}
      </Grid>
      {/*}}}*/}
      {/* {{{ Owner 2*/}
      <Grid item xs={12}>
        <Divider />
        <Caption sx={{ fontWeight: 600 }}>
          Cookie de configurações 2
        </Caption>{' '}
        <Divider />
      </Grid>
      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Nome:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>settings</Caption>{' '}
      </Grid>
      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Fornecedor:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>Plataforma de Treinos</Caption>{' '}
      </Grid>
      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Funcão:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>
          Salvar preferências do usuário. Ex: Tema escuro.
        </Caption>{' '}
      </Grid>
      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Tipo:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>Local Storage</Caption>{' '}
      </Grid>
      {/*}}}*/}
    </Grid>
  );
}
