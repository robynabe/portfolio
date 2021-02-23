// FOOTER //
import { makeYear } from '../utilities/date';

function Footer() {

  return (
    <footer>
      <p>Created by <a href="https://github.com/robynabe">Robyn Abe</a> &copy;{makeYear()} • robynabe20@gmail.com</p>
    </footer>
  );
}

export default Footer;
