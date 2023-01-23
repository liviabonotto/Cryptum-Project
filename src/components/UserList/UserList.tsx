import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  id: string,
  email: string,
  projetos: number,
  assinaturas: number,
  pais: string,
  lastLogin: string,
) {
  return { name, id, email, projetos, assinaturas,pais, lastLogin };
}

const rows = [
  createData('Annete Black', '12539', 'email@email.com', 3, 2,'Brasil', '17/01/2023'),
  createData('Annete Black', '12539', 'email@email.com', 3, 2,'Brasil', '17/01/2023'),
  createData('Annete Black', '12539', 'email@email.com', 3, 2, 'Brasil','17/01/2023'),
  createData('Annete Black', '12539', 'email@email.com', 3, 2, 'Brasil','17/01/2023'),
  createData('Annete Black', '12539', 'email@email.com', 3, 2,'Brasil', '17/01/2023'),
  createData('Annete Black', '12539', 'email@email.com', 3, 2, 'Brasil','17/01/2023'),
  createData('Annete Black', '12539', 'email@email.com', 3, 2, 'Brasil','17/01/2023'),
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome do Usuário</TableCell>
            <TableCell align="right">ID do Usuário</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Projetos</TableCell>
            <TableCell align="right">Assinaturas</TableCell>
            <TableCell align="right">País</TableCell>
            <TableCell align="right">Último Login</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.id}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.projetos}</TableCell>
              <TableCell align="right">{row.assinaturas}</TableCell>
              <TableCell align="right">{row.pais}</TableCell>
              <TableCell align="right">{row.lastLogin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}