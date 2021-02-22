// FOOTER //
import { makeYear } from '../utilities/date';

function Footer() {

  return (
    <footer>
      <p>robynabe20@gmail.com</p>
      <p>Created by <a href="https://github.com/robynabe">Robyn Abe</a> &copy;{makeYear()}</p>
    </footer>
  );
}

export default Footer;
