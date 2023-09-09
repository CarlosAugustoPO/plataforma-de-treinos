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
          {value}%
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
          {value}%
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
          {value}%
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
        <YAxis unit="%" stroke={theme.palette.text.primary} />
        <Tooltip
          formatter={(value) => `${value}%`}
          contentStyle={{
            backgroundColor: theme.palette.background.paper,
          }} // usando a variável CSS
        />
        {dadosDoGrafico.map((item) => (
          <>
            {item.pollock7dobras !== '' && (
              <Line
                type="monotone"
                dataKey="pollock7dobras"
                stroke="#8884d8"
                strokeWidth={2}
                name="Pollock 7 dobras"
                hide={hiddenSeries.includes('pollock7dobras')}
                label={(props) => (
                  <CustomizedLabel
                    {...props}
                    color={theme.palette.primary.main}
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
