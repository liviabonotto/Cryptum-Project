import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styles from "./UserList.module.css";
import Portal from '@mui/base/Portal';
import { Box } from '@mui/system';
import ProjectInfo from '../ProjectInfo/ProjectInfo';


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
  const [show, setShow] = React.useState(false);
  const container = React.useRef(null);

  const handleClick = () => {
    setShow(!show);
  };
  return (
    <div>

    <div className={styles.tableContent}>
    <TableContainer component={Paper} style={{width:'1198px', background: '#2B2F42', height:'441px', marginBottom:'40px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead >
          <TableRow style={{background: '#3E4153', borderRadius:'40px',textAlign:'center'}}>
            <TableCell align="center"  className={`${styles.cellHeader} ${styles.cellName}`} >Nome do Usuário</TableCell>
            <TableCell align="center" className={styles.cellHeader}>ID do Usuário</TableCell>
            <TableCell align="center" className={styles.cellHeader}>Email</TableCell>
            <TableCell align="center" className={styles.cellHeader}>Projetos</TableCell>
            <TableCell align="center" className={styles.cellHeader}>Assinaturas</TableCell>
            <TableCell align="center" className={styles.cellHeader}>País</TableCell>
            <TableCell align="center" className={`${styles.cellHeader} ${styles.ultimoLogin}`}>Último Login</TableCell>
            
          </TableRow>
        </TableHead>
        
        <TableBody style={{textAlign:'center'}} >
          {rows.map((row) => (
              
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              style={{background:'#1B2232', borderRadius:'10px'}}
            >

              <TableCell component="th" align="center" scope="row"  onClick={handleClick} className={`${styles.cellBody} ${styles.idCell}`}>
                {row.name}
              </TableCell>
              <TableCell align="center" onClick={handleClick} className={`${styles.cellBody}`}>{row.id}</TableCell>
              <TableCell align="center"  onClick={handleClick} className={styles.cellBody}>{row.email}</TableCell>
              <TableCell align="center"  onClick={handleClick} className={styles.cellBody}>{row.projetos}</TableCell>
              <TableCell align="center"  onClick={handleClick} className={styles.cellBody}>{row.assinaturas}</TableCell>
              <TableCell align="center"  onClick={handleClick} className={styles.cellBody}>{row.pais}</TableCell>
              <TableCell align="center"  onClick={handleClick} className={`${styles.cellBody} ${styles.cellLastLogin}`}>{row.lastLogin}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    <div>
    
    <Box >
      
      {show ? (
        <Portal container={container.current}>
          <Box sx={{ p: 1, my: 1 }} className={styles.userDetails} ref={container} >
           <div className={styles.userProfile}>
           <img src="/userIcon.svg" alt="" />
           <div>
           <h2>Annete Black</h2>
           <p>Último acesso: 17/01/2023 12:30</p>
           </div>
           </div>
           <div className={styles.userInfo}>
            <div>
           <p>ID:  <span style={{color: '#9373FF'}}>123456</span></p>
           <p>Email:  <span style={{color: '#9373FF'}}>email@email.com</span></p>
           <p>Telefone:  <span style={{color: '#9373FF'}}>+55(21)99999-9999</span></p>
           <p>País: <span style={{color: '#9373FF'}}>Brasil</span></p>
            </div>
            <div>
              <img src="/line.svg" alt="" />
            </div>
            <div>
            <p>Quantidade de projetos criados:  <span style={{color: '#9373FF'}}>18</span></p>
           <p>Planos assinados:  <span style={{color: '#9373FF'}}>3</span></p>
           <p>Data de criação da conta:  <span style={{color: '#9373FF'}}>20/08/2022</span></p>
            </div>
           </div>
           <div className={styles.projectInfo}>
           <h2>Projetos do usuário</h2>
           <ProjectInfo></ProjectInfo>
           </div>
          </Box>
        </Portal>
      ) : null}
    </Box>
  </div>
    </div>
    
  );
}
