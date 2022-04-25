import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import LinkButton from 'src/components/LinkButton/index';
//My components
import Title from 'src/components/Title/index';
import Text from 'src/components/Text/index';
import MyCard from 'src/components/MyCard/index';
//Mui Components
import AnnouncementTwoToneIcon from '@mui/icons-material/AnnouncementTwoTone';
//Hooks

export default function IndexUnauthTemplate() {
  return (
    <MyCard>
      <AnnouncementTwoToneIcon
        color="warning"
        sx={{ fontSize: 60 }}
      />
      <Grid style={{ width: '90%' }}>
        <Title paragraph>Site em construção</Title>
        <Divider
          sx={{
            bgcolor: 'clearLine.main',
            marginTop: '2%',
            marginBottom: '3%',
          }}
        />
        <Text paragraph>
          A Plataforma de Treinos está em construção, mas você já
          pode experimentar os recursos da consultoria em
          exercício físico que estão em fase de testes. Contamos
          com a sua opinião a cerca do que podemos melhorar para
          a sua experência de uso e a dos novos usuários.
        </Text>
        <Text>
          Para registrar-se na versão beta bastar clicar no link
          abaixo
        </Text>
      </Grid>
      <Grid style={{ width: '90%' }} mb={2}>
        <Divider
          sx={{
            bgcolor: 'clearLine.main',
            marginBottom: '6%',
          }}
        />{' '}
        <Grid item>
          <LinkButton cta="Registre-se" href="/cadastrar" />
        </Grid>
      </Grid>
    </MyCard>
  );
}
