import Caption from 'src/components/Caption/index';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

export default function EssentialsCookies() {
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
      {/* {{{ Essentials 1*/}
      <Grid item xs={12}>
        <Caption sx={{ fontWeight: 600 }}>
          Cookie essencial 1
        </Caption>{' '}
        <Divider />
      </Grid>

      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Nome:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>nextauth.message</Caption>{' '}
      </Grid>

      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Fornecedor:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>NextAuth.js</Caption>{' '}
      </Grid>

      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Função:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>
          Comunica as ações do usuário entre as páginas
        </Caption>{' '}
      </Grid>
      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Tipo:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>Cookie</Caption>{' '}
      </Grid>
      {/*}}}*/}
      {/* {{{ Essentials 2*/}
      <Grid item xs={12}>
        <Divider />
        <Caption sx={{ fontWeight: 600 }}>
          Cookie essencial 2
        </Caption>{' '}
        <Divider />
      </Grid>
      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Nome:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>next-auth.callback.url</Caption>{' '}
      </Grid>
      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Fornecedor:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>NextAuth.js</Caption>{' '}
      </Grid>
      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Função:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>
          Informa padrões de redirecionamento para o serviço de
          autenticação
        </Caption>{' '}
      </Grid>
      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Tipo:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>Cookie</Caption>{' '}
      </Grid>
      {/*}}}*/}
      {/* {{{ Essentials 3*/}
      <Grid item xs={12}>
        <Divider />
        <Caption sx={{ fontWeight: 600 }}>
          Cookie essencial 3
        </Caption>{' '}
        <Divider />
      </Grid>
      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Nome:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>next-auth.csrf-token</Caption>{' '}
      </Grid>
      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Fornecedor:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>NextAuth.js</Caption>{' '}
      </Grid>
      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Função:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>
          Garante a autenticidade do usuário ao fazer o login
        </Caption>{' '}
      </Grid>
      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Tipo:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>Cookie</Caption>{' '}
      </Grid>

      {/*}}}*/}
      {/* {{{ Essentials 4*/}
      <Grid item xs={12}>
        <Divider />
        <Caption sx={{ fontWeight: 600 }}>
          Cookie essencial 4
        </Caption>{' '}
        <Divider />
      </Grid>
      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Nome:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>ally-supports-cache</Caption>{' '}
      </Grid>
      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Fornecedor:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>ally.js</Caption>{' '}
      </Grid>
      <Grid item xs={4}>
        <Caption sx={{ fontWeight: 600 }}>Função:</Caption>{' '}
      </Grid>
      <Grid item xs={8}>
        <Caption>
          Garante a funcionalidade de recursos de acessibilidade
          do navegador
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
