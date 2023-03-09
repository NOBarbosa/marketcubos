import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import s from './headerLayout.module.scss';


function HeaderLayout() {
  return (
    <div className={s.container}>
        <Header />
        <div className={s['content-page']}>
          <h1>Nome da loja</h1>
          <Outlet />
        </div>
    </div>
  );
}

export default HeaderLayout;