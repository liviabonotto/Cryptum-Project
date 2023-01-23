import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header/Header';
//import UserList from '@/components/UserList/UserList';
import ListInfo from '@/components/ListInfo/ListInfo';
import UserList from '@/components/UserList/UserList';
import Head from 'next/head';

export default function Users() {
    return (
        <div>
          <Head>
          <link rel="shortcut icon" href="/icon.svg" type="image/x-icon" />
          </Head>
             
          <Header></Header>
          <ListInfo></ListInfo>
          <UserList></UserList>
        </div>
      );
}