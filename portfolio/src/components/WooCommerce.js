// SINGLE PROJECT PAGE - The Rolling Pin //
import { Link } from 'react-router-dom';

function WooCommerce() {
    window.scrollTo(0,0);
    return (
        <main>
            <h1>The Rolling Pin</h1>

         
            <div className="details-container">Coming Soon!</div>
    
            <div className="details-container">Coming Soon!</div>
               
        
            <div className="links-container">

                <Link className="link-bck" to="/portfolio">
                    <svg width="30px" height="20px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                    <span>Portfolio</span>
                </Link>

                <Link className="link-fwd" to="/Brochure">
                    <span>Brochure</span>
                    <svg width="30px" height="20px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </Link>

            </div>
        </main> 
    );
}
export default WooCommerce;