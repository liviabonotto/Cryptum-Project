import React from "react";
import styles from '../ListInfo/ListInfo.module.css';
import UserList from "../UserList/UserList";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { color } from "@mui/system";

const options = [
  {
    value: 'País',
    label: 'País',
  },
  {
    value: 'Projetos',
    label: 'Projetos',
  },
  {
    value: 'Assinaturas',
    label: 'Assinaturas',
  },
 
];


export default function ListInfo(){
    return (
        <div className={styles.container}>
          <div className={styles.headerList}>
          <h1>Lista de Usuários</h1>
          <button>
            <img src="/iconExport" alt="" />
            Exportar Planilha
            </button>
          </div>
          <TextField id="outlined-basic" label="Nome/Id/Email"  defaultValue="" variant="outlined" style={{  borderRadius:'4px', color:'white',marginLeft:'45px',marginTop:'15px',marginBottom:'15px'}}/>
          
          <TextField
          id="outlined-select-currency"
          select
          defaultValue="País"
          style={{borderColor: 'white',marginLeft:'45px',marginTop:'15px',marginBottom:'15px'}}>
           {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        </div>
      );
}