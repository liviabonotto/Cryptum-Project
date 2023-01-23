import React from "react";
import Button from '@mui/material/Button';
import styles from '../Header/Header.module.css'
import Avatar from '@mui/material/Avatar';

export default function Header() {
    return (
      <div className={styles.container}>
        <div className={styles.logo}>
        <img src='./TITLE.svg' alt="Logo" />
        <Avatar alt="Travis Howard" src="./user.svg" />
        </div>
        <div className={styles.links}>
          <a href="">Informações Gerais</a>
          <a href="">Lista de Usuários</a>
          <a href="">Projetos DEV</a>
          <a href="">Projetos Store</a>
          <a href="">Projetos NFT</a>
        </div>
      </div>
    );
  }