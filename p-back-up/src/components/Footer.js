// FOOTER //
import { makeYear } from '../utilities/date';
import Top from './Top.js';

function Footer() {

  return (
    <footer>
      <Top />

      <div className="social-links">
        <a href="https://twitter.com/robynabe20" rel="noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
        <a href="https://www.linkedin.com/in/robyn-abe-03633b1a8/" rel="noreferrer" target="_blank"><i className="fab fa-linkedin-in"></i></a>
      </div>

      <p>Created by <a href="https://github.com/robynabe">Robyn Abe</a> &copy;{makeYear()} • robynabe20@gmail.com</p>

    </footer>
  );
}
export default Footer;
