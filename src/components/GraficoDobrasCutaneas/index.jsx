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
          {value !== null ? `${value} mm` : ''}
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
          {value !== null ? `${value} mm` : ''}
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
          {value !== null ? `${value} mm` : ''}
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
    dobraCutaneaPeitoral:
      item.dobraCutaneaPeitoral === '' ||
      item.dobraCutaneaPeitoral === 'hide' ||
      item.dobraCutaneaPeitoral === null
        ? null
        : item.dobraCutaneaPeitoral,
    dobraCutaneaTricipital:
      item.dobraCutaneaTricipital === '' ||
      item.dobraCutaneaTricipital === 'hide' ||
      item.dobraCutaneaTricipital === null
        ? null
        : item.dobraCutaneaTricipital,
    dobraCutaneaPanturrilha:
      item.dobraCutaneaPanturrilha === '' ||
      item.dobraCutaneaPanturrilha === 'hide' ||
      item.dobraCutaneaPanturrilha === null
        ? null
        : item.dobraCutaneaPanturrilha,
    dobraCutaneaCoxa:
      item.dobraCutaneaCoxa === '' ||
      item.dobraCutaneaCoxa === 'hide' ||
      item.dobraCutaneaCoxa === null
        ? null
        : item.dobraCutaneaCoxa,
    dobraCutaneaSuprailiaca:
      item.dobraCutaneaSuprailiaca === '' ||
      item.dobraCutaneaSuprailiaca === 'hide' ||
      item.dobraCutaneaSuprailiaca === null
        ? null
        : item.dobraCutaneaSuprailiaca,
    dobraCutaneaAxilarMedia:
      item.dobraCutaneaAxilarMedia === '' ||
      item.dobraCutaneaAxilarMedia === 'hide' ||
      item.dobraCutaneaAxilarMedia === null
        ? null
        : item.dobraCutaneaAxilarMedia,
    dobraCutaneaSubescapular:
      item.dobraCutaneaSubescapular === '' ||
      item.dobraCutaneaSubescapular === 'hide' ||
      item.dobraCutaneaSubescapular === null
        ? null
        : item.dobraCutaneaSubescapular,
    dobraCutaneaAbdominal:
      item.dobraCutaneaAbdominal === '' ||
      item.dobraCutaneaAbdominal === 'hide' ||
      item.dobraCutaneaAbdominal === null
        ? null
        : item.dobraCutaneaAbdominal,
  }));

  return (
    <>
      <>
        <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
        <Title paragraph mt={2}>
          Gráfico de Dobras Cutâneas
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
              unit=" mm"
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
                p.dobraCutaneaPeitoral &&
                p.dobraCutaneaPeitoral !== '' &&
                p.dobraCutaneaPeitoral !== 'hide' &&
                p.dobraCutaneaPeitoral !== null,
            ) ? (
              <Line
                type="monotone"
                dataKey="dobraCutaneaPeitoral"
                stroke="#8884d8"
                strokeWidth={2}
                name="Peitoral"
                hide={hiddenSeries.includes(
                  'dobraCutaneaPeitoral',
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
                p.dobraCutaneaTricipital &&
                p.dobraCutaneaTricipital !== '' &&
                p.dobraCutaneaTricipital !== 'hide' &&
                p.dobraCutaneaTricipital !== null,
            ) ? (
              <Line
                type="monotone"
                dataKey="dobraCutaneaTricipital"
                stroke={theme.palette.success.main}
                strokeWidth={2}
                name="Tríceps"
                hide={hiddenSeries.includes(
                  'dobraCutaneaTricipital',
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
                p.dobraCutaneaAbdominal &&
                p.dobraCutaneaAbdominal !== '' &&
                p.dobraCutaneaAbdominal !== 'hide' &&
                p.dobraCutaneaAbdominal !== null,
            ) ? (
              <Line
                type="monotone"
                dataKey="dobraCutaneaAbdominal"
                strokeWidth={2}
                name="Abdominal"
                stroke={theme.palette.mainIcon.main}
                hide={hiddenSeries.includes(
                  'dobraCutaneaAbdominal',
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
                p.dobraCutaneaPanturrilha &&
                p.dobraCutaneaPanturrilha !== '' &&
                p.dobraCutaneaPanturrilha !== 'hide' &&
                p.dobraCutaneaPanturrilha !== null,
            ) ? (
              <Line
                type="monotone"
                dataKey="dobraCutaneaPanturrilha"
                strokeWidth={2}
                name="Panturrilha"
                stroke={theme.palette.primary.main}
                hide={hiddenSeries.includes(
                  'dobraCutaneaPanturrilha',
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

            {dadosDoGrafico.some(
              (p) =>
                p.dobraCutaneaCoxa &&
                p.dobraCutaneaCoxa !== '' &&
                p.dobraCutaneaCoxa !== 'hide' &&
                p.dobraCutaneaCoxa !== null,
            ) ? (
              <Line
                type="monotone"
                dataKey="dobraCutaneaCoxa"
                strokeWidth={2}
                name="Coxa"
                stroke={theme.palette.warning.main}
                hide={hiddenSeries.includes('dobraCutaneaCoxa')}
                label={(props) => (
                  <CustomizedLabel
                    {...props}
                    color={theme.palette.warning.main}
                  />
                )}
                connectNulls
              />
            ) : null}

            {dadosDoGrafico.some(
              (p) =>
                p.dobraCutaneaSuprailiaca &&
                p.dobraCutaneaSuprailiaca !== '' &&
                p.dobraCutaneaSuprailiaca !== 'hide' &&
                p.dobraCutaneaSuprailiaca !== null,
            ) ? (
              <Line
                type="monotone"
                dataKey="dobraCutaneaSuprailiaca"
                stroke={theme.palette.secondary.main}
                strokeWidth={2}
                name="Suprailíaca"
                hide={hiddenSeries.includes(
                  'dobraCutaneaSuprailiaca',
                )}
                label={(props) => (
                  <CustomizedLabel
                    {...props}
                    color={theme.palette.secondary.main}
                  />
                )}
                connectNulls
              />
            ) : null}

            {dadosDoGrafico.some(
              (p) =>
                p.dobraCutaneaAxilarMedia &&
                p.dobraCutaneaAxilarMedia !== '' &&
                p.dobraCutaneaAxilarMedia !== 'hide' &&
                p.dobraCutaneaAxilarMedia !== null,
            ) ? (
              <Line
                type="monotone"
                dataKey="dobraCutaneaAxilarMedia"
                stroke={theme.palette.info.main}
                strokeWidth={2}
                name="Axilar Média"
                hide={hiddenSeries.includes(
                  'dobraCutaneaAxilarMedia',
                )}
                label={(props) => (
                  <CustomizedLabel
                    {...props}
                    color={theme.palette.info.main}
                  />
                )}
                connectNulls
              />
            ) : null}

            {dadosDoGrafico.some(
              (p) =>
                p.dobraCutaneaSubescapular &&
                p.dobraCutaneaSubescapular !== '' &&
                p.dobraCutaneaSubescapular !== 'hide' &&
                p.dobraCutaneaSubescapular !== null,
            ) ? (
              <Line
                type="monotone"
                dataKey="dobraCutaneaSubescapular"
                stroke={theme.palette.error.main}
                strokeWidth={2}
                name="Subescapular"
                hide={hiddenSeries.includes(
                  'dobraCutaneaSubescapular',
                )}
                label={(props) => (
                  <CustomizedLabel
                    {...props}
                    color={theme.palette.error.main}
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
