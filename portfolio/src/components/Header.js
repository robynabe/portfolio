// HEADER //
import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../images/logo.png';
import { useEffect } from 'react';

function Header() {
  const loadEffect = () => {
    let title = document.getElementById('header-title')
    title.style.marginLeft = "120px";
  }

  useEffect(() => {
      loadEffect();
    }, [])

  return (
    <header id="header">

      <div className="header">
        <h1 id="header-title">Web Developer</h1>
        <Link to={'/'}><img className="logo" src={logo} alt="logo"/></Link>
        <Nav />
      </div>
      
    </header>
  );
}

export default Header;
