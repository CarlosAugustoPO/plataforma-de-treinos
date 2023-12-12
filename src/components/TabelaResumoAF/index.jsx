import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import Title from 'src/components/Title/index';

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
    <>
      {' '}
      <Divider sx={{ mt: '2.5%', mb: '2.5%' }} />
      <Title paragraph mt={2}>
        Resumo da Avaliação Física
      </Title>
      <TableContainer sx={{ width: '80%', margin: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell key="desc" align="left">
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

            {dadosDoGrafico[dadosDoGrafico.length - 1]?.idade ===
            'hide' ? null : (
              <TableRow>
                <TableCell key="idade" align="left">
                  Idade
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.idade === '' ||
                    item.idade === 'hide' ||
                    item.idade === null
                      ? '---'
                      : `${item.idade} anos`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]?.peso ===
            'hide' ? null : (
              <TableRow>
                <TableCell key="peso" align="left">
                  Peso
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.peso === '' ||
                    item.peso === 'hide' ||
                    item.peso === null
                      ? '---'
                      : `${item.peso} kg`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]?.imc ===
            'hide' ? null : (
              <TableRow>
                <TableCell key="imc" align="left">
                  IMC
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.imc === '' ||
                    item.imc === 'hide' ||
                    item.imc === null
                      ? '---'
                      : `${item.imc}`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.idadeCorporal === 'hide' ? null : (
              <TableRow>
                <TableCell key="idadeCorporal" align="left">
                  Idade Corporal Bioimpedância
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.idadeCorporal === '' ||
                    item.idadeCorporal === 'hide' ||
                    item.idadeCorporal === null
                      ? '---'
                      : `${item.idadeCorporal} anos`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.gorduraVisceral === 'hide' ? null : (
              <TableRow>
                <TableCell key="gorduraVisceral" align="left">
                  Gordura Visceral Bioimpedância
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.gorduraVisceral === '' ||
                    item.gorduraVisceral === 'hide' ||
                    item.gorduraVisceral === null
                      ? '---'
                      : `${item.gorduraVisceral} kg`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.massaMuscularBia === 'hide' ? null : (
              <TableRow>
                <TableCell key="massaMuscularBia" align="left">
                  %Massa Muscular Bioimpedância
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.massaMuscularBia === '' ||
                    item.massaMuscularBia === 'hide' ||
                    item.massaMuscularBia === null
                      ? '---'
                      : `${item.massaMuscularBia} %`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.porcentagemDeGorduraBia === 'hide' ? null : (
              <TableRow>
                <TableCell
                  key="porcentagemDeGorduraBia"
                  align="left"
                >
                  %Gordura Bioimpedância
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.porcentagemDeGorduraBia === '' ||
                    item.porcentagemDeGorduraBia === 'hide' ||
                    item.porcentagemDeGorduraBia === null
                      ? '---'
                      : `${item.porcentagemDeGorduraBia} %`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.pollock7dobras === 'hide' ? null : (
              <TableRow>
                <TableCell key="pollock7dobras" align="left">
                  %Gordura (Pollock 7d)
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.pollock7dobras === '' ||
                    item.pollock7dobras === 'hide' ||
                    item.pollock7dobras === null
                      ? '---'
                      : `${item.pollock7dobras} %`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.pesoGordo === 'hide' ? null : (
              <TableRow>
                <TableCell key="pesoGordo" align="left">
                  Peso Gordo (Pollock 7d)
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.pesoGordo === '' ||
                    item.pesoGordo === 'hide' ||
                    item.pesoGordo === null
                      ? '---'
                      : `${item.pesoGordo} kg`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.pesoMagro === 'hide' ? null : (
              <TableRow>
                <TableCell key="pesoMagro" align="left">
                  Peso Magro (Pollock 7d)
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.pesoMagro === '' ||
                    item.pesoMagro === 'hide' ||
                    item.pesoMagro === null
                      ? '---'
                      : `${item.pesoMagro} kg`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.dobraCutaneaPeitoral === 'hide' ? null : (
              <TableRow>
                <TableCell
                  key="dobraCutaneaPeitoral"
                  align="left"
                >
                  Dobra Cutânea Peitoral
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.dobraCutaneaPeitoral === '' ||
                    item.dobraCutaneaPeitoral === 'hide' ||
                    item.dobraCutaneaPeitoral === null
                      ? '---'
                      : `${item.dobraCutaneaPeitoral} mm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.dobraCutaneaAbdominal === 'hide' ? null : (
              <TableRow>
                <TableCell
                  key="dobraCutaneaAbdominal"
                  align="left"
                >
                  Dobra Cutânea de Abdômem
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.dobraCutaneaAbdominal === '' ||
                    item.dobraCutaneaAbdominal === 'hide' ||
                    item.dobraCutaneaAbdominal === null
                      ? '---'
                      : `${item.dobraCutaneaAbdominal} mm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.dobraCutaneaTricipital === 'hide' ? null : (
              <TableRow>
                <TableCell
                  key="dobraCutaneaTricipital"
                  align="left"
                >
                  Dobra Cutânea de Tríceps
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.dobraCutaneaTricipital === '' ||
                    item.dobraCutaneaTricipital === 'hide' ||
                    item.dobraCutaneaTricipital === null
                      ? '---'
                      : `${item.dobraCutaneaTricipital} mm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.dobraCutaneaSubescapular === 'hide' ? null : (
              <TableRow>
                <TableCell
                  key="dobraCutaneaSubescapular"
                  align="left"
                >
                  Dobra Cutânea Subescapular
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.dobraCutaneaSubescapular === '' ||
                    item.dobraCutaneaSubescapular === 'hide' ||
                    item.dobraCutaneaSubescapular === null
                      ? '---'
                      : `${item.dobraCutaneaSubescapular} mm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.dobraCutaneaSuprailiaca === 'hide' ? null : (
              <TableRow>
                <TableCell
                  key="dobraCutaneaSuprailiaca"
                  align="left"
                >
                  Dobra Cutânea Suprailiaca
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.dobraCutaneaSuprailiaca === '' ||
                    item.dobraCutaneaSuprailiaca === 'hide' ||
                    item.dobraCutaneaSuprailiaca === null
                      ? '---'
                      : `${item.dobraCutaneaSuprailiaca} mm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.dobraCutaneaCoxa === 'hide' ? null : (
              <TableRow>
                <TableCell key="dobraCutaneaCoxa" align="left">
                  Dobra Cutânea de Coxa
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.dobraCutaneaCoxa === '' ||
                    item.dobraCutaneaCoxa === 'hide' ||
                    item.dobraCutaneaCoxa === null
                      ? '---'
                      : `${item.dobraCutaneaCoxa} mm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.dobraCutaneaPanturrilha === 'hide' ? null : (
              <TableRow>
                <TableCell
                  key="dobraCutaneaPanturrilha"
                  align="left"
                >
                  Dobra Cutânea de Panturrilha
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.dobraCutaneaPanturrilha === '' ||
                    item.dobraCutaneaPanturrilha === 'hide' ||
                    item.dobraCutaneaPanturrilha === null
                      ? '---'
                      : `${item.dobraCutaneaPanturrilha} mm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.circunferenciaDePunho === 'hide' ? null : (
              <TableRow>
                <TableCell
                  key="circunferenciaDePunho"
                  align="left"
                >
                  Circunferência de Punho
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.circunferenciaDePunho === '' ||
                    item.circunferenciaDePunho === 'hide' ||
                    item.circunferenciaDePunho === null
                      ? '---'
                      : `${item.circunferenciaDePunho} cm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.circunferenciaDeAbdomen === 'hide' ? null : (
              <TableRow>
                <TableCell
                  key="circunferenciaDeAbdomen"
                  align="left"
                >
                  Circunferência de Abdômen
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.circunferenciaDeAbdomen === '' ||
                    item.circunferenciaDeAbdomen === 'hide' ||
                    item.circunferenciaDeAbdomen === null
                      ? '---'
                      : `${item.circunferenciaDeAbdomen} cm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.circunferenciaDePescoco === 'hide' ? null : (
              <TableRow>
                <TableCell
                  key="circunferenciaDePescoco"
                  align="left"
                >
                  Circunferência de Pescoço
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.circunferenciaDePescoco === '' ||
                    item.circunferenciaDePescoco === 'hide' ||
                    item.circunferenciaDePescoco === null
                      ? '---'
                      : `${item.circunferenciaDePescoco} cm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.circunferenciaDeCintura === 'hide' ? null : (
              <TableRow>
                <TableCell
                  key="circunferenciaDeCintura"
                  align="left"
                >
                  Circunferência de Cintura
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.circunferenciaDeCintura === '' ||
                    item.circunferenciaDeCintura === 'hide' ||
                    item.circunferenciaDeCintura === null
                      ? '---'
                      : `${item.circunferenciaDeCintura} cm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.circunferenciaDeQuadril === 'hide' ? null : (
              <TableRow>
                <TableCell
                  key="circunferenciaDeQuadril"
                  align="left"
                >
                  Circunferência de Quadril
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.circunferenciaDeQuadril === '' ||
                    item.circunferenciaDeQuadril === 'hide' ||
                    item.circunferenciaDeQuadril === null
                      ? '---'
                      : `${item.circunferenciaDeQuadril} cm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.circunferenciaDePanturrilha === 'hide' ? null : (
              <TableRow>
                <TableCell
                  key="circunferenciaDePanturrilha"
                  align="left"
                >
                  Circunferência de Panturrilha
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.circunferenciaDePanturrilha === '' ||
                    item.circunferenciaDePanturrilha ===
                      'hide' ||
                    item.circunferenciaDePanturrilha === null
                      ? '---'
                      : `${item.circunferenciaDePanturrilha} cm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.circunferenciaBracoRelaxado === 'hide' ? null : (
              <TableRow>
                <TableCell
                  key="circunferenciaBracoRelaxado"
                  align="left"
                >
                  Circunferência de Braço Relaxado
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.circunferenciaBracoRelaxado === '' ||
                    item.circunferenciaBracoRelaxado ===
                      'hide' ||
                    item.circunferenciaBracoRelaxado === null
                      ? '---'
                      : `${item.circunferenciaBracoRelaxado} cm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.circunferenciaBracoContraido ===
            'hide' ? null : (
              <TableRow>
                <TableCell
                  key="circunferenciaBracoContraido"
                  align="left"
                >
                  Circunferência de Braço Contraído
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.circunferenciaBracoContraido === '' ||
                    item.circunferenciaBracoContraido ===
                      'hide' ||
                    item.circunferenciaBracoContraido === null
                      ? '---'
                      : `${item.circunferenciaBracoContraido} cm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.circunferenciaTorax === 'hide' ? null : (
              <TableRow>
                <TableCell
                  key="circunferenciaTorax"
                  align="left"
                >
                  Circunferência de Tórax
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.circunferenciaTorax === '' ||
                    item.circunferenciaTorax === 'hide' ||
                    item.circunferenciaTorax === null
                      ? '---'
                      : `${item.circunferenciaTorax} cm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.circunferenciaAntebraco === 'hide' ? null : (
              <TableRow>
                <TableCell
                  key="circunferenciaAntebraco"
                  align="left"
                >
                  Circunferência de Antebraço
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.circunferenciaAntebraco === '' ||
                    item.circunferenciaAntebraco === 'hide' ||
                    item.circunferenciaAntebraco === null
                      ? '---'
                      : `${item.circunferenciaAntebraco} cm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.circunferenciaCoxa === 'hide' ? null : (
              <TableRow>
                <TableCell key="circunferenciaCoxa" align="left">
                  Circunferência de Coxa
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.circunferenciaCoxa === '' ||
                    item.circunferenciaCoxa === 'hide' ||
                    item.circunferenciaCoxa === null
                      ? '---'
                      : `${item.circunferenciaCoxa} cm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.circunferenciaTornozelo === 'hide' ? null : (
              <TableRow>
                <TableCell
                  key="circunferenciaTornozelo"
                  align="left"
                >
                  Circunferência de Tornozelo
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.circunferenciaTornozelo === '' ||
                    item.circunferenciaTornozelo === 'hide' ||
                    item.circunferenciaTornozelo === null
                      ? '---'
                      : `${item.circunferenciaTornozelo} cm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]?.rcq ===
            'hide' ? null : (
              <TableRow>
                <TableCell key="rcq" align="left">
                  RCQ
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.rcq === '' ||
                    item.rcq === 'hide' ||
                    item.rcq === null
                      ? '---'
                      : `${item.rcq}`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.fcRepouso === 'hide' ? null : (
              <TableRow>
                <TableCell key="fcDeRepouso" align="left">
                  FC de Repouso
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.fcRepouso === '' ||
                    item.fcRepouso === 'hide' ||
                    item.fcRepouso === null
                      ? '---'
                      : `${item.fcRepouso} bpm`}
                  </TableCell>
                ))}
              </TableRow>
            )}

            {dadosDoGrafico[dadosDoGrafico.length - 1]
              ?.paRepouso === 'hide' ? null : (
              <TableRow>
                <TableCell key="paDeRepouso" align="left">
                  PA de Repouso
                </TableCell>
                {dadosDoGrafico.map((item) => (
                  <TableCell key={item.data} align="left">
                    {item.paRepouso === '' ||
                    item.paRepouso === 'hide' ||
                    item.paRepouso === null
                      ? '---'
                      : `${item.paRepouso} mmHg`}
                  </TableCell>
                ))}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TabelaPesoCorporal;
