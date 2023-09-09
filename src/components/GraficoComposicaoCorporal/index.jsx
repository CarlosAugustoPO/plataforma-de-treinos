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
          {value} kg
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
          {value} kg
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
          {value} kg
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
        <YAxis unit=" kg" stroke={theme.palette.text.primary} />
        <Tooltip
          formatter={(value) => `${value} kg`}
          contentStyle={{
            backgroundColor: theme.palette.background.paper,
          }} // usando a variável CSS
        />
        {dadosDoGrafico.map((item) => (
          <>
            {item.peso !== '' && (
              <Line
                type="monotone"
                dataKey="peso"
                stroke="#8884d8"
                strokeWidth={2}
                name="Peso"
                hide={hiddenSeries.includes('peso')}
                label={(props) => (
                  <CustomizedLabel
                    {...props}
                    color={'#8884d8'}
                  />
                )}
              />
            )}
            {item.pesoMagro !== '' && (
              <Line
                type="monotone"
                dataKey="pesoMagro"
                stroke={theme.palette.success.main}
                strokeWidth={2}
                name="Peso Magro"
                hide={hiddenSeries.includes('pesoMagro')}
                label={(props) => (
                  <CustomizedLabel
                    {...props}
                    color={theme.palette.success.main}
                  />
                )}
              />
            )}
            {item.pesoGordo !== '' && (
              <Line
                type="monotone"
                dataKey="pesoGordo"
                stroke={theme.palette.mainIcon.main}
                strokeWidth={2}
                name="Peso Gordo"
                hide={hiddenSeries.includes('pesoGordo')}
                label={(props) => (
                  <CustomizedLabel
                    {...props}
                    color={theme.palette.mainIcon.main}
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
