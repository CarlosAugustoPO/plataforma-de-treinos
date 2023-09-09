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
    const theme = useTheme();
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
          {value} mm
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
          {value} mm
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
          {value} mm
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

  return (
    <ResponsiveContainer width="90%" height={400}>
      <LineChart data={dadosDoGrafico}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis
          dataKey="data"
          interval="preserveEnd"
          stroke={theme.palette.text.primary}
          tick={renderCustomAxisTick}
        />
        <YAxis unit=" mm" stroke={theme.palette.text.primary} />
        <Tooltip
          formatter={(value) => `${value} mm`}
          contentStyle={{
            backgroundColor: theme.palette.background.paper,
          }} // usando a variável CSS
        />
        {dadosDoGrafico.map((item) => (
          <>
            {item.dobraCutaneaPeitoral !== '' && (
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
              />
            )}
            {item.dobraCutaneaTricipital !== '' && (
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
              />
            )}
            {item.dobraCutaneaAbdominal !== '' && (
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
              />
            )}
            {item.dobraCutaneaPanturrilha !== '' && (
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
              />
            )}
            {item.dobraCutaneaCoxa !== '' && (
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
              />
            )}
            {item.dobraCutaneaSuprailiaca !== '' && (
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
              />
            )}
            {item.dobraCutaneaAxilarMedia !== '' && (
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
              />
            )}
            {item.dobraCutaneaSubescapular !== '' && (
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
              />
            )}
          </>
        ))}

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
  );
};

export default GraficoPesoCorporal;
