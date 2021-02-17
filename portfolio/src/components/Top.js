// SCROLL TO TOP COMPONENT //

// - needs icon
// - slow transition??

function Top() {

  return (
    <a className="scroll-to-top" href="#header">
      <div className="icon-container">
        <svg className="triangle" xmlns="http://www.w3.org/2000/svg" width="28" height="25" viewBox="0 0 24 24"><path d="M24 22h-24l12-20z"/></svg>
        <svg className="chevron one" width="25" height="25" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"/></svg>    
        <svg className="chevron two" width="24" height="25" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"/></svg>
      </div>
    </a>
  );
}

export default Top;