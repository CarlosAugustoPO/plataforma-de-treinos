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
  let colunas = [
    <TableCell key="avaliacao_atual" align="left">
      Avaliação atual
    </TableCell>,
  ];

  if (dadosDoGrafico.length >= 2) {
    colunas.unshift(
      <TableCell key="ultima_avaliacao" align="left">
        Última avaliação
      </TableCell>,
    );
  }

  if (dadosDoGrafico.length >= 3) {
    colunas.unshift(
      <TableCell key="primeira_avaliacao" align="left">
        Primeira avaliação
      </TableCell>,
    );
  }

  return (
    <TableContainer sx={{ width: '80%', margin: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell key="teste" align="left">
              Descrição
            </TableCell>
            {colunas}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell key="data" align="left">
              Data
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.data}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="peso" align="left">
              Idade
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.idade} anos
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="peso" align="left">
              Peso
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.peso} kg
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="peso" align="left">
              IMC
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.imc}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Dobra Cutânea Peitoral
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.dobraCutaneaPeitoral} mm
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Dobra Cutânea de Abdômen
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.dobraCutaneaAbdominal} mm
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Dobra Cutânea de Tríceps
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.dobraCutaneaTricipital} mm
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Dobra Cutânea Subescapular
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.dobraCutaneaSubescapular} mm
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Dobra Cutânea Suprailiaca
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.dobraCutaneaSuprailiaca} mm
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Dobra Cutânea de Coxa
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.dobraCutaneaCoxa} mm
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Dobra Cutânea de Panturrilha
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.dobraCutaneaPanturrilha} mm
              </TableCell>
            ))}
          </TableRow>

          <TableRow>
            <TableCell key="pollock" align="left">
              Pollock 7 dobras
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.pollock7dobras} %
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Peso Gordo
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.pesoGordo} kg
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Peso Magro
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.pesoMagro} kg
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              %G Bioimpedância
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.porcentagemDeGorduraBia} %
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Idade Corporal Bioimpedância
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.idadeCorporal} Anos
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Gordura Visceral Bioimpedância
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.gorduraVisceral} kg
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Massa Muscular Bioimpedância
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.massaMuscularBia} %
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Circunferencia de Punho
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.circunferenciaDePunho} cm
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Circunferencia de Abdômen
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.circunferenciaDeAbdomen} cm
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Circunferencia de Pescoço
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.circunferenciaDePescoco} cm
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Circunferencia de Cintura
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.circunferenciaDeCintura} cm
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Circunferencia de Quadril
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.circunferenciaDeQuadril} cm
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Circunferencia de Panturrilha
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.circunferenciaDePanturrilha} cm
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Circunferencia de Braço Relaxado
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.circunferenciaBracoRelaxado} cm
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Circunferencia de Braço Contraído
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.circunferenciaBracoContraido} cm
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Circunferencia de Tórax
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.circunferenciaTorax} cm
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Circunferencia de Antebraço
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.circunferenciaAntebraco} cm
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Circunferencia de Coxa
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.circunferenciaCoxa} cm
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              Circunferencia de Tornozelo
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.circunferenciaTornozelo} cm
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              RCQ
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.rcq}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              FC de Repouso
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.fcRepouso}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell key="pollock" align="left">
              PA de Repouso
            </TableCell>
            {dadosDoGrafico.map((item) => (
              <TableCell key={item.data} align="left">
                {item.paRepouso}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TabelaPesoCorporal;
