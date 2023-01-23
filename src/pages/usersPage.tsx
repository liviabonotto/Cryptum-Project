import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/Header/Header';
//import UserList from '@/components/UserList/UserList';
import ListInfo from '@/components/ListInfo/ListInfo';
import UserList from '@/components/UserList/UserList';

export default function Users() {
    return (
        <div>
          <Header></Header>
          <ListInfo></ListInfo>
          <UserList></UserList>
        </div>
      );
}