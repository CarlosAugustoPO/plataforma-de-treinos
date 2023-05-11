import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';

const TabelaPesoCorporal = ({ dadosDoGrafico }) => {
  return (
    <TableContainer sx={{ width: '80%', margin: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">
              Primeira avaliação
            </TableCell>
            <TableCell align="center">
              Última avaliação
            </TableCell>
            <TableCell align="center">Avaliação atual</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="center">
                {item.data}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="center">
                {item.peso} kg
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TabelaPesoCorporal;
