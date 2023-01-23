import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from "./UserList.module.css";


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
    <div className={styles.tableContent}>
    <TableContainer component={Paper} style={{width:'1198px', overflow:'-moz-initial'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow style={{background: 'rgba(138, 135, 151, 0.2)', borderRadius:'40px', marginBottom:'10px',textAlign:'center'}}>
            <TableCell align="center" className={styles.cellHeader} >Nome do Usuário</TableCell>
            <TableCell align="center" className={styles.cellHeader}>ID do Usuário</TableCell>
            <TableCell align="center" className={styles.cellHeader}>Email</TableCell>
            <TableCell align="center" className={styles.cellHeader}>Projetos</TableCell>
            <TableCell align="center" className={styles.cellHeader}>Assinaturas</TableCell>
            <TableCell align="center" className={styles.cellHeader}>País</TableCell>
            <TableCell align="center" className={styles.cellHeader}>Último Login</TableCell>
            
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
    </div>
  );
}