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
    circunferenciaDeQuadril:
      item.circunferenciaDeQuadril === '' ||
      item.circunferenciaDeQuadril === 'hide' ||
      item.circunferenciaDeQuadril === null
        ? null
        : item.circunferenciaDeQuadril,
    circunferenciaCoxa:
      item.circunferenciaCoxa === '' ||
      item.circunferenciaCoxa === 'hide' ||
      item.circunferenciaCoxa === null
        ? null
        : item.circunferenciaCoxa,
    circunferenciaDePanturrilha:
      item.circunferenciaDePanturrilha === '' ||
      item.circunferenciaDePanturrilha === 'hide' ||
      item.circunferenciaDePanturrilha === null
        ? null
        : item.circunferenciaDePanturrilha,
    circunferenciaTornozelo:
      item.circunferenciaTornozelo === '' ||
      item.circunferenciaTornozelo === 'hide' ||
      item.circunferenciaTornozelo === null
        ? null
        : item.circunferenciaTornozelo,
  }));

  return (
    <>
      {
        //dadosDoGrafico.some(
        //   (p) =>
        //     p.circunferenciaDeQuadril &&
        //     p.circunferenciaDeQuadril !== '' &&
        //     p.circunferenciaDeQuadril !== 'hide' &&
        //     p.circunferenciaDeQuadril !== null &&
        //     p.circunferenciaCoxa &&
        //     p.circunferenciaCoxa !== '' &&
        //     p.circunferenciaCoxa !== 'hide' &&
        //     p.circunferenciaCoxa !== null &&
        //     p.circunferenciaDePanturrilha &&
        //     p.circunferenciaDePanturrilha !== '' &&
        //     p.circunferenciaDePanturrilha !== 'hide' &&
        //     p.circunferenciaDePanturrilha !== null &&,
        // ) ? (
        <>
          <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
          <Title paragraph mt={2}>
            Gráfico de Circunferências de Membros Inferiores
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
                  p.circunferenciaDeQuadril &&
                  p.circunferenciaDeQuadril !== '' &&
                  p.circunferenciaDeQuadril !== 'hide' &&
                  p.circunferenciaDeQuadril !== null,
              ) ? (
                <Line
                  type="monotone"
                  dataKey="circunferenciaDeQuadril"
                  stroke="#8884d8"
                  strokeWidth={2}
                  name="Quadril"
                  hide={hiddenSeries.includes(
                    'circunferenciaDeQuadril',
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
                  p.circunferenciaCoxa &&
                  p.circunferenciaCoxa !== '' &&
                  p.circunferenciaCoxa !== 'hide' &&
                  p.circunferenciaCoxa !== null,
              ) ? (
                <Line
                  type="monotone"
                  dataKey="circunferenciaCoxa"
                  stroke={theme.palette.success.main}
                  strokeWidth={2}
                  name="Coxa"
                  hide={hiddenSeries.includes(
                    'circunferenciaCoxa',
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
                  p.circunferenciaDePanturrilha &&
                  p.circunferenciaDePanturrilha !== '' &&
                  p.circunferenciaDePanturrilha !== 'hide' &&
                  p.circunferenciaDePanturrilha !== null,
              ) ? (
                <Line
                  type="monotone"
                  dataKey="circunferenciaDePanturrilha"
                  strokeWidth={2}
                  name="Panturrilha"
                  stroke={theme.palette.mainIcon.main}
                  hide={hiddenSeries.includes(
                    'circunferenciaDePanturrilha',
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
                  p.circunferenciaTornozelo &&
                  p.circunferenciaTornozelo !== '' &&
                  p.circunferenciaTornozelo !== 'hide' &&
                  p.circunferenciaTornozelo !== null,
              ) ? (
                <Line
                  type="monotone"
                  dataKey="circunferenciaTornozelo"
                  strokeWidth={2}
                  name="Tornozelo"
                  stroke={theme.palette.primary.main}
                  hide={hiddenSeries.includes(
                    'circunferenciaTornozelo',
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
