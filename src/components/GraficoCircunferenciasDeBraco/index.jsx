import { useTheme } from '@mui/material';
import React, { useState } from 'react';

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
import Divider from '@mui/material/Divider';
import Title from 'src/components/Title/index';

const GraficoPesoCorporal = ({ dadosDoGrafico }) => {
  const theme = useTheme();
  const [hiddenSeries, setHiddenSeries] = useState([]);
  const toggleSeries = (dataKey) => {
    if (hiddenSeries.includes(dataKey)) {
      setHiddenSeries(
        hiddenSeries.filter((key) => key !== dataKey),
      );
    } else {
      setHiddenSeries([...hiddenSeries, dataKey]);
    }
  };

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
          {value !== null ? `${value} cm` : ''}
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
          {value !== null ? `${value} cm` : ''}
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
          {value !== null ? `${value} cm` : ''}
        </text>
      );
    }
  };

  const renderCustomAxisTick = (props) => {
    const { x, y, payload, index } = props;

    if (index === 0) {
      return (
        <text
          x={x + 85}
          y={y}
          dy={16}
          textAnchor="end"
          fill={theme.palette.text.primary}
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
        fill={theme.palette.text.primary}
      >
        {payload.value}
      </text>
    );
  };

  const dadosManipulados = dadosDoGrafico.map((item) => ({
    ...item,
    circunferenciaBracoRelaxado:
      item.circunferenciaBracoRelaxado === '' ||
      item.circunferenciaBracoRelaxado === 'hide' ||
      item.circunferenciaBracoRelaxado === null
        ? null
        : item.circunferenciaBracoRelaxado,
    circunferenciaBracoContraido:
      item.circunferenciaBracoContraido === '' ||
      item.circunferenciaBracoContraido === 'hide' ||
      item.circunferenciaBracoContraido === null
        ? null
        : item.circunferenciaBracoContraido,
    circunferenciaAntebraco:
      item.circunferenciaAntebraco === '' ||
      item.circunferenciaAntebraco === 'hide' ||
      item.circunferenciaAntebraco === null
        ? null
        : item.circunferenciaAntebraco,
    circunferenciaDePunho:
      item.circunferenciaDePunho === '' ||
      item.circunferenciaDePunho === 'hide' ||
      item.circunferenciaDePunho === null
        ? null
        : item.circunferenciaDePunho,
  }));

  return (
    <>
      <>
        <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
        <Title paragraph mt={2}>
          Gráfico de Circunferências de Braço
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
              unit=" cm"
              stroke={theme.palette.text.primary}
            />
            <Tooltip
              formatter={(value) => `${value} mm`}
              contentStyle={{
                backgroundColor: theme.palette.background.paper,
              }} // usando a variável CSS
            />

            {dadosDoGrafico.some(
              (p) =>
                p.circunferenciaBracoRelaxado &&
                p.circunferenciaBracoRelaxado !== '' &&
                p.circunferenciaBracoRelaxado !== 'hide' &&
                p.circunferenciaBracoRelaxado !== null,
            ) ? (
              <Line
                type="monotone"
                dataKey="circunferenciaBracoRelaxado"
                stroke="#8884d8"
                strokeWidth={2}
                name="Braço relaxado"
                hide={hiddenSeries.includes(
                  'circunferenciaBracoRelaxado',
                )}
                label={(props) => (
                  <CustomizedLabel
                    {...props}
                    color={'#8884d8'}
                  />
                )}
                connectNulls
              />
            ) : null}

            {dadosDoGrafico.some(
              (p) =>
                p.circunferenciaBracoContraido &&
                p.circunferenciaBracoContraido !== '' &&
                p.circunferenciaBracoContraido !== 'hide' &&
                p.circunferenciaBracoContraido !== null,
            ) ? (
              <Line
                type="monotone"
                dataKey="circunferenciaBracoContraido"
                stroke={theme.palette.success.main}
                strokeWidth={2}
                name="Braço Contraído"
                hide={hiddenSeries.includes(
                  'circunferenciaBracoContraido',
                )}
                label={(props) => (
                  <CustomizedLabel
                    {...props}
                    color={theme.palette.success.main}
                  />
                )}
                connectNulls
              />
            ) : null}

            {dadosDoGrafico.some(
              (p) =>
                p.circunferenciaAntebraco &&
                p.circunferenciaAntebraco !== '' &&
                p.circunferenciaAntebraco !== 'hide' &&
                p.circunferenciaAntebraco !== null,
            ) ? (
              <Line
                type="monotone"
                dataKey="circunferenciaAntebraco"
                strokeWidth={2}
                name="Antebraço"
                stroke={theme.palette.mainIcon.main}
                hide={hiddenSeries.includes(
                  'circunferenciaAntebraco',
                )}
                label={(props) => (
                  <CustomizedLabel
                    {...props}
                    color={theme.palette.mainIcon.main}
                  />
                )}
                connectNulls
              />
            ) : null}

            {dadosDoGrafico.some(
              (p) =>
                p.circunferenciaDePunho &&
                p.circunferenciaDePunho !== '' &&
                p.circunferenciaDePunho !== 'hide' &&
                p.circunferenciaDePunho !== null,
            ) ? (
              <Line
                type="monotone"
                dataKey="circunferenciaDePunho"
                strokeWidth={2}
                name="Punho"
                stroke={theme.palette.primary.main}
                hide={hiddenSeries.includes(
                  'circunferenciaDePunho',
                )}
                label={(props) => (
                  <CustomizedLabel
                    {...props}
                    color={theme.palette.primary.main}
                  />
                )}
                connectNulls
              />
            ) : null}
            <Legend
              verticalAlign="top"
              align="left" // Alinhar à direita
              iconSize={20} // Tamanho do ícone
              onClick={(e) => toggleSeries(e.dataKey)}
              wrapperStyle={{
                paddingLeft: '70px',
                paddingBottom: '20px',
              }} // Ajuste de espaço à direita
            />
          </LineChart>
        </ResponsiveContainer>
      </>
    </>
  );
};

export default GraficoPesoCorporal;
