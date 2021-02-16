// HEADER //
import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../images/logo.png';

function Header() {
  return (
    <header id="header">
      <div className="sub-header">
        <p>Robyn • Abe</p>
        <p>robynabe20@gmail.com</p>
      </div>
      <div className="header">
        <Link to={'/'}><img className="logo" src={logo} alt="Brand logo"/></Link>
        <Nav />
      </div>
    </header>
  );
}

export default Header;
