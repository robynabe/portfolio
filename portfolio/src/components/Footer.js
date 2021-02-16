// FOOTER //
import { makeYear } from '../utilities/date';

function Footer() {

  return (
    <footer>
      <p>Designed and coded by <a href="https://github.com/robynabe">Robyn Abe</a> {makeYear()} &copy;</p>
    </footer>
  );
}

export default Footer;
