// FOOTER //
function Footer() {

    const d = new Date();
    const year = d.getFullYear();

  return (
    <footer>
      <p>Designed and coded by <a href="https://github.com/robynabe">Robyn Abe</a> {year} &copy;</p>
    </footer>
  );
}

export default Footer;
