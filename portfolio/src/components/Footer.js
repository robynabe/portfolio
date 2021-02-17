// FOOTER //
import { makeYear } from '../utilities/date';

function Footer() {

  return (
    <footer>
      <p>robynabe20@gmail.com</p>
      <p>&copy; Designed and coded by <a href="https://github.com/robynabe">Robyn Abe</a> {makeYear()}</p>
    </footer>
  );
}

export default Footer;
