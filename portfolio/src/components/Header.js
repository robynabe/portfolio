// HEADER //
import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../images/logo.png';

function Header() {
  return (
    <header>
      <Link to={'/'}><img className="logo" src={logo} /></Link>
      <Nav />
    </header>
  );
}

export default Header;
