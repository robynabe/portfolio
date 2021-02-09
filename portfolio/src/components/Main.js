// MAIN PAGE (Projects) //
import Top from '../utilities/Top';
import Image from '../images/code-placeholder-img.png'; // Change once iamges are confirmed

function Main() {
    return (
        <main className="main">
           <div>
               <h2>Project Name</h2>
               <p>The project overview</p>
               <img src={Image} alt="Code"/>
           </div>
            <Top />
        </main>
    )
}
export default Main;