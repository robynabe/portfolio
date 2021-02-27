// FOOTER //
import { makeYear } from '../utilities/date';
import Top from './Top.js';

function Footer() {

  return (
    <footer>
      <Top />
      <p>Created by <a href="https://github.com/robynabe">Robyn Abe</a> &copy;{makeYear()} • robynabe20@gmail.com</p>
    </footer>
  );
}

export default Footer;
