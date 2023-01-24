import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from '../ProjectInfo/ProjectInfo.module.css'

function createData(
  name: string,
  tipo: string,
  creditosUsados: number,
  network: string,
  plano: string,
) {
  return { name, tipo, creditosUsados, network, plano };
}

const rows = [
  createData('Minha loja', 'Store', 6.0, 'Testnet', 'Free'),
  createData('Meu App', 'Developer', 9.0, 'Mainnet', 'Advanced'),
  createData('Minha loja', 'Store', 6.0, 'Testnet', 'Free'),
  createData('Meu App', 'Developer', 9.0, 'Mainnet', 'Advanced'),
  createData('Minha loja', 'Store', 6.0, 'Testnet', 'Free'),
  createData('Meu App', 'Developer', 9.0, 'Mainnet', 'Advanced'),
  createData('Minha loja', 'Store', 6.0, 'Testnet', 'Free'),
  createData('Meu App', 'Developer', 9.0, 'Mainnet', 'Advanced'),
];

export default function ProjectInfo() {
  return (
    <TableContainer component={Paper} className={styles.containerTable}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead className={styles.headerTable}>
          <TableRow>
            <TableCell align="center" className={styles.headerCell}>Nome</TableCell>
            <TableCell align="center" className={styles.headerCell}>Tipo</TableCell>
            <TableCell align="center" className={styles.headerCell}>Créditos <br/>Usados/Disponíveis</TableCell>
            <TableCell align="center" className={styles.headerCell}>Network</TableCell>
            <TableCell align="center" className={styles.headerCell}>Plano</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={styles.tableBody}>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row"  align="center" className={styles.bodyCell}>
                {row.name}
              </TableCell>
              <TableCell align="center" className={styles.bodyCell}>{row.tipo}</TableCell>
              <TableCell align="center" className={styles.bodyCell}>{row.creditosUsados}</TableCell>
              <TableCell align="center" className={styles.bodyCell}>{row.network}</TableCell>
              <TableCell align="center" className={styles.bodyCell}>{row.plano}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}