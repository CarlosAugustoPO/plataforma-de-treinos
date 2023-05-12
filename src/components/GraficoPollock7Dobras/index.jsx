import { useTheme } from '@mui/material';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const GraficoPollock7Dobras = ({ dadosDoGrafico }) => {
  const theme = useTheme();
  const CustomizedLabel = ({ x, y, index, value }) => {
    const theme = useTheme();
    if (index === 0) {
      return (
        <text
          x={x}
          y={y}
          dx={45}
          dy={30}
          fill={theme.palette.primary.main}
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
          fill={theme.palette.primary.main}
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
          fill={theme.palette.primary.main}
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
        <YAxis unit=" %" stroke={theme.palette.text.primary} />
        <Tooltip
          formatter={(value) => `${value} %`}
          contentStyle={{
            backgroundColor: theme.palette.background.paper,
          }} // usando a variável CSS
        />

        <Line
          type="monotone"
          dataKey="pollock7dobras"
          stroke="#8884d8"
          strokeWidth={2}
          label={<CustomizedLabel />}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default GraficoPollock7Dobras;
