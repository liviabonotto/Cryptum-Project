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
  createData('Annete Black', '12539', 'email@email.com', 3, 2, 'Brasil','17/01/2023'),
  createData('Annete Black', '12539', 'email@email.com', 3, 2, 'Brasil','17/01/2023'),
  createData('Annete Black', '12539', 'email@email.com', 3, 2, 'Brasil','17/01/2023'),
  createData('Annete Black', '12539', 'email@email.com', 3, 2, 'Brasil','17/01/2023'),
  createData('Annete Black', '12539', 'email@email.com', 3, 2, 'Brasil','17/01/2023'),
  createData('Annete Black', '12539', 'email@email.com', 3, 2, 'Brasil','17/01/2023'),
  createData('Annete Black', '12539', 'email@email.com', 3, 2, 'Brasil','17/01/2023'),
  createData('Annete Black', '12539', 'email@email.com', 3, 2, 'Brasil','17/01/2023'),
  
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} style={{width:'1198px', overflow:'-moz-initial'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow style={{background: 'rgba(138, 135, 151, 0.2)', borderRadius:'40px', marginBottom:'10px',textAlign:'center'}}>
            <TableCell style={{textAlign:'center'}}>Nome do Usuário</TableCell>
            <TableCell align="right" style={{textAlign:'center'}}>ID do Usuário</TableCell>
            <TableCell align="right"style={{textAlign:'center'}}>Email</TableCell>
            <TableCell align="right"style={{textAlign:'center'}}>Projetos</TableCell>
            <TableCell align="right"style={{textAlign:'center'}}>Assinaturas</TableCell>
            <TableCell align="right"style={{textAlign:'center'}}>País</TableCell>
            <TableCell align="right"style={{textAlign:'center'}}>Último Login</TableCell>
          </TableRow>
        </TableHead>
        
        <TableBody style={{textAlign:'center'}} >
          {rows.map((row) => (
              
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={{background:'#1B2232', borderRadius:'10px'}}
            >
              <TableCell component="th" scope="row"  style={{ color:'white',textAlign:'center'}}>
                {row.name}
              </TableCell>
              <TableCell align="right" style={{ color:'white',textAlign:'center'}}>{row.id}</TableCell>
              <TableCell align="right" style={{ color:'white',textAlign:'center'}}>{row.email}</TableCell>
              <TableCell align="right"style={{ color:'white',textAlign:'center'}}>{row.projetos}</TableCell>
              <TableCell align="right"style={{ color:'white',textAlign:'center'}}>{row.assinaturas}</TableCell>
              <TableCell align="right"style={{ color:'white',textAlign:'center'}}>{row.pais}</TableCell>
              <TableCell align="right"style={{ color:'white',textAlign:'center', borderRadius:'0,10px,10px,0'}}>{row.lastLogin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}