import Layout from 'src/components/Layout/index';

export default function Custom500() {
  return <h1>500 | Erro do servidor</h1>;
}

Custom500.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
