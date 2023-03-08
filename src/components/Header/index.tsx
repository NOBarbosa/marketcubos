import s from './header.module.scss';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={s.header}>
      <Link to='/'>
        <img src={Logo} alt="Logo markert Cubos"/>
      </Link>
    </header>
    )
}

export default Header