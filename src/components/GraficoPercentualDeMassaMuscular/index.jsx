import { useTheme } from '@mui/material';
import React, { useState } from 'react';
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
  // const [hiddenSeries, setHiddenSeries] = useState([]);
  // const toggleSeries = (dataKey) => {
  //   if (hiddenSeries.includes(dataKey)) {
  //     setHiddenSeries(
  //       hiddenSeries.filter((key) => key !== dataKey),
  //     );
  //   } else {
  //     setHiddenSeries([...hiddenSeries, dataKey]);
  //   }
  // };

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
    let textColor = theme.palette.text.primary; // Cor padrão do texto no eixo x
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
    massaMuscularBia:
      item.massaMuscularBia === '' ||
      item.massaMuscularBia === 'hide' ||
      item.massaMuscularBia === null
        ? null
        : item.massaMuscularBia,
  }));

  return (
    <>
      {dadosDoGrafico.some(
        (p) =>
          p.massaMuscularBia &&
          p.massaMuscularBia !== '' &&
          p.massaMuscularBia !== 'hide' &&
          p.massaMuscularBia !== null,
      ) ? (
        <>
          <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
          <Title paragraph mt={2}>
            Gráfico do Percentual de Massa Muscular
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
              {dadosDoGrafico.some(
                (p) =>
                  p.massaMuscularBia &&
                  p.massaMuscularBia !== '' &&
                  p.massaMuscularBia !== 'hide' &&
                  p.massaMuscularBia !== null,
              ) ? (
                <Line
                  type="monotone"
                  dataKey="massaMuscularBia"
                  stroke={theme.palette.success.main}
                  strokeWidth={2}
                  // hide={hiddenSeries.includes('massaMuscularBia')}
                  name="%MM Bioimpedância"
                  label={(props) => (
                    <CustomizedLabel
                      {...props}
                      color={theme.palette.success.main}
                    />
                  )}
                  connectNulls
                />
              ) : null}
              <Legend
                verticalAlign="top"
                align="left" // Alinhar à direita
                iconSize={20} // Tamanho do ícone
                // onClick={(e) => toggleSeries(e.dataKey)}
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
