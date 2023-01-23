import React from "react";
import styles from '../ListInfo/ListInfo.module.css';
import UserList from "../UserList/UserList";

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


        </div>
      );
}