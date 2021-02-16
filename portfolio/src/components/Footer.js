// FOOTER //
import { makeYear } from '../utilities/date';

function Footer() {

  return (
    <footer>
      <p>&copy; Designed and coded by <a href="https://github.com/robynabe">Robyn Abe</a> {makeYear()}</p>
    <p><span>You can find me here</span> robynabe20@gmail.com</p>
    </footer>
  );
}

export default Footer;
