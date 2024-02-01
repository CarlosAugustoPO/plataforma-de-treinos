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
    circunferenciaDePescoco:
      item.circunferenciaDePescoco === '' ||
      item.circunferenciaDePescoco === 'hide' ||
      item.circunferenciaDePescoco === null
        ? null
        : item.circunferenciaDePescoco,
    circunferenciaTorax:
      item.circunferenciaTorax === '' ||
      item.circunferenciaTorax === 'hide' ||
      item.circunferenciaTorax === null
        ? null
        : item.circunferenciaTorax,
    circunferenciaDeCintura:
      item.circunferenciaDeCintura === '' ||
      item.circunferenciaDeCintura === 'hide' ||
      item.circunferenciaDeCintura === null
        ? null
        : item.circunferenciaDeCintura,
    circunferenciaDeAbdomen:
      item.circunferenciaDeAbdomen === '' ||
      item.circunferenciaDeAbdomen === 'hide' ||
      item.circunferenciaDeAbdomen === null
        ? null
        : item.circunferenciaDeAbdomen,
  }));

  return (
    <>
      {
        //dadosDoGrafico.some(
        //   (p) =>
        //     p.circunferenciaDePescoco &&
        //     p.circunferenciaDePescoco !== '' &&
        //     p.circunferenciaDePescoco !== 'hide' &&
        //     p.circunferenciaDePescoco !== null &&
        //     p.circunferenciaTorax &&
        //     p.circunferenciaTorax !== '' &&
        //     p.circunferenciaTorax !== 'hide' &&
        //     p.circunferenciaTorax !== null &&
        //     p.circunferenciaDeCintura &&
        //     p.circunferenciaDeCintura !== '' &&
        //     p.circunferenciaDeCintura !== 'hide' &&
        //     p.circunferenciaDeCintura !== null &&
        //     p.circunferenciaDeAbdomen &&
        //     p.circunferenciaDeAbdomen !== '' &&
        //     p.circunferenciaDeAbdomen !== 'hide' &&
        //     p.circunferenciaDeAbdomen !== null,
        // ) ? (
        <>
          <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
          <Title paragraph mt={2}>
            Gráfico de Circunferências de Tronco
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
                  backgroundColor:
                    theme.palette.background.paper,
                }} // usando a variável CSS
              />

              {dadosDoGrafico.some(
                (p) =>
                  p.circunferenciaDePescoco &&
                  p.circunferenciaDePescoco !== '' &&
                  p.circunferenciaDePescoco !== 'hide' &&
                  p.circunferenciaDePescoco !== null,
              ) ? (
                <Line
                  type="monotone"
                  dataKey="circunferenciaDePescoco"
                  stroke="#8884d8"
                  strokeWidth={2}
                  name="Pescoço"
                  hide={hiddenSeries.includes(
                    'circunferenciaDePescoco',
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
                  p.circunferenciaTorax &&
                  p.circunferenciaTorax !== '' &&
                  p.circunferenciaTorax !== 'hide' &&
                  p.circunferenciaTorax !== null,
              ) ? (
                <Line
                  type="monotone"
                  dataKey="circunferenciaTorax"
                  stroke={theme.palette.success.main}
                  strokeWidth={2}
                  name="Tórax"
                  hide={hiddenSeries.includes(
                    'circunferenciaTorax',
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
                  p.circunferenciaDeCintura &&
                  p.circunferenciaDeCintura !== '' &&
                  p.circunferenciaDeCintura !== 'hide' &&
                  p.circunferenciaDeCintura !== null,
              ) ? (
                <Line
                  type="monotone"
                  dataKey="circunferenciaDeCintura"
                  strokeWidth={2}
                  name="Cintura"
                  stroke={theme.palette.mainIcon.main}
                  hide={hiddenSeries.includes(
                    'circunferenciaDeCintura',
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
                  p.circunferenciaDeAbdomen &&
                  p.circunferenciaDeAbdomen !== '' &&
                  p.circunferenciaDeAbdomen !== 'hide' &&
                  p.circunferenciaDeAbdomen !== null,
              ) ? (
                <Line
                  type="monotone"
                  dataKey="circunferenciaDeAbdomen"
                  strokeWidth={2}
                  name="Abdomen"
                  stroke={theme.palette.primary.main}
                  hide={hiddenSeries.includes(
                    'circunferenciaDeAbdomen',
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
        // ) : null}
      }
    </>
  );
};

export default GraficoPesoCorporal;
