import { useTheme } from '@mui/material';
import Title from 'src/components/Title/index';
import Divider from '@mui/material/Divider';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

const GraficoPesoCorporal = ({ dadosDoGrafico }) => {
  const theme = useTheme();

  const CustomizedLabel = ({ x, y, index, value, color }) => {
    if (index === 0) {
      return (
        <text
          x={x}
          y={y}
          dx={45}
          dy={30}
          fill={color}
          fontSize={14}
          textAnchor="end"
        >
          {value !== null ? `${value}%` : ''}
        </text>
      );
    }
    if (index === 1) {
      return (
        <text
          x={x}
          y={y}
          dx={20}
          dy={30}
          fill={color}
          fontSize={14}
          textAnchor="end"
        >
          {value !== null ? `${value}%` : ''}
        </text>
      );
    }
    if (index === 2) {
      return (
        <text
          x={x}
          y={y}
          dx={-1}
          dy={30}
          fill={color}
          fontSize={14}
          textAnchor="end"
        >
          {value !== null ? `${value}%` : ''}
        </text>
      );
    }
  };

  const renderCustomAxisTick = (props) => {
    const { x, y, payload, index } = props;
    const dataIndex = dadosManipulados.findIndex(
      (item) => item.data === payload.value,
    );
    const isPollockEmptyOrNull =
      dataIndex !== -1 &&
      (dadosManipulados[dataIndex].pollock7dobras === '' ||
        dadosManipulados[dataIndex].pollock7dobras === 'hide' ||
        dadosManipulados[dataIndex].pollock7dobras === null);

    let textColor = theme.palette.text.primary; // Cor padrão do texto no eixo x
    if (isPollockEmptyOrNull) {
      textColor = theme.palette.disabled.main; // Altere para a cor desejada para os rótulos afetados
    }

    if (index === 0) {
      return (
        <text
          x={x + 85}
          y={y}
          dy={16}
          textAnchor="end"
          fill={textColor}
        >
          {payload.value}
        </text>
      );
    }

    return (
      <text
        x={x}
        y={y}
        dy={16}
        textAnchor="middle"
        fill={textColor}
      >
        {payload.value}
      </text>
    );
  };

  const dadosManipulados = dadosDoGrafico.map((item) => ({
    ...item,
    pollock7dobras:
      item.pollock7dobras === '' ||
      item.pollock7dobras === 'hide' ||
      item.pollock7dobras === null
        ? null
        : item.pollock7dobras,
  }));

  return (
    <>
      {dadosDoGrafico.some(
        (p) =>
          p.pollock7dobras &&
          p.pollock7dobras !== '' &&
          p.pollock7dobras !== 'hide' &&
          p.pollock7dobras !== null,
      ) ? (
        <>
          <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
          <Title paragraph mt={2}>
            Gráfico do Percentual de Gordura
          </Title>
          <ResponsiveContainer width="90%" height={400}>
            <LineChart data={dadosManipulados}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="data"
                interval="preserveEnd"
                stroke={theme.palette.text.primary}
                tick={renderCustomAxisTick}
              />
              <YAxis
                unit="%"
                stroke={theme.palette.text.primary}
              />
              <Tooltip
                formatter={(value) => `${value}%`}
                contentStyle={{
                  backgroundColor:
                    theme.palette.background.paper,
                }} // usando a variável CSS
              />

              <Line
                type="monotone"
                dataKey="pollock7dobras"
                stroke="#8884d8"
                strokeWidth={2}
                name="Pollock 7 dobras"
                label={(props) => (
                  <CustomizedLabel
                    {...props}
                    color={theme.palette.primary.main}
                  />
                )}
                connectNulls
              />
              <Legend
                verticalAlign="top"
                align="left" // Alinhar à direita
                iconSize={20} // Tamanho do ícone
                wrapperStyle={{
                  paddingLeft: '70px',
                  paddingBottom: '20px',
                }} // Ajuste de espaço à direita
              />
            </LineChart>
          </ResponsiveContainer>
        </>
      ) : null}
    </>
  );
};

export default GraficoPesoCorporal;
