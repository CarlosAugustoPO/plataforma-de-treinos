import Grid from '@mui/material/Grid';
import LinkButton from 'src/components/LinkButton/index';
//My components
import Title from 'src/components/Title/index';
import Text from 'src/components/Text/index';
import MyCard from 'src/components/MyCard/index';
//Mui Components
import AnnouncementTwoToneIcon from '@mui/icons-material/AnnouncementTwoTone';
//Hooks

export default function IndexAuthTemplate() {
  return (
    <MyCard>
      <AnnouncementTwoToneIcon
        color="warning"
        sx={{ fontSize: 60 }}
      />
      <Title gutterBottom>Site em construção</Title>
      <Text paragraph>
        A Plataforma de Treinos está em construção, mas você já
        pode experimentar os recursos da consultoria em exercício
        físico que estão em fase de testes. Contamos com a sua
        opinião a cerca do que podemos melhorar para a sua
        experência de uso e a dos novos usuários.
      </Text>
      <Text paragraph>
        Para registrar-se na versão beta bastar clicar no link
        abaixo
      </Text>
      <Grid container justifyContent="center" m={2}>
        <Grid item>
          <LinkButton cta="Acessar Painel" href="/cadastrar" />
        </Grid>
      </Grid>
    </MyCard>
  );
}
