// SINGLE PROJECT PAGE - The Rolling Pin //
import { Link } from 'react-router-dom';
import SimpleSlider from '../utilities/wcSlick';
import MetaTags from 'react-meta-tags';


function WooCommerce() {
    window.scrollTo(0,0);
    return (
        <main className="single-main">
            <MetaTags>
                <title>Robyn Abe • E-Commerce</title>
                <meta name="description" content="A WooCommerce WordPress project of a made-up local bakery built showcasing
                 web developer skills using a content management system" />
                <meta property="og:title" content="Woocommerce Bakery" />     
            </MetaTags>

            <h1>WooCommerce Bakery</h1>
           <SimpleSlider />

            <div className="single-links">
                <a className="link-left" href="https://github.com/htpwebdesign/rolling-pin" rel="noreferrer" target="_blank">Github Repo</a>
                <a className="link-right" href="https://www.robynabe.com/the-rolling-pin"  rel="noreferrer" target="_blank">Live Project</a>
            </div>

            <div className="about-project">
                <h2>What's this project all about?</h2>
                <p>This project is a WooCommerce WordPress site. It was created from an made-up local bakery to showcase e-commerce wesbite builds
                    using a CMS. It highlights PHP skills.
                </p>
                <ul>
                    <li><i className="fab fa-php"></i></li>
                    <li><i className="fab fa-github"></i></li>
                    <li><i className="fab fa-wordpress"></i></li>
                    <li><i className="fab fa-sass"></i></li>
                </ul>
            </div>

         
            <div className="details-container">
                <h2>Project Features</h2>
                    <div className="feature">
                        <p>This Project was built around two main features, both which required quite a bit of JavaScript,
                            external data use and teamwork.
                        </p>
                            <h3><span></span><b>1.</b> The Favourites Feature</h3>

                        <div className="feature-details">
                            <video autoPlay loop muted playsInline className="favourites-vid">
                            <source src={"/"}
                                    type="video/mp4"
                                    alt="Favourites button function preview"/>
                            </video>
                            <p>This feature was created after successful API connection in order to allow users to select and store movies for later for a more
                                interactive atmosphere. We are provided the ability to favourite movies from multiple categories and pages, as well as 
                                unfavourite movies they no longer wanted. These selections used local storage for memory.
                            </p>
                        </div>
                    </div>

                    <div className="feature">
                        <h3><span></span><b>2.</b> The Sorting Feature</h3>

                        <div className="feature-details">
                                <video autoPlay loop muted playsInline className="sorting-vid">
                            <source src={"/"}
                                    type="video/mp4"
                                    alt="Movie sorting function preview"/>
                            </video>

                            <p>This feature required manipulation of the API url in order to target different data from the database. It pulled movies from four
                                different categories: Popular, Now Playing, Top Rated and Coming Soon.
                            </p>
                        </div>
                    </div> 
            </div>
    
            <div className="details-container">
                <div className="details-container">
                    <h2>Tools and Skills</h2>
                    <div className="project-details">

                        <div className="specs">
                            <h3>Project Specs</h3>
                            <ul>
                                <li><b>Project Type: </b> Collaborative, team of 4</li>
                                <li><b>Project Duration: </b> 4 weeks??</li>
                                <li><b>Responsiveness: </b> mobile, tablet, desktop</li>
                                <li><b>Other Specs: </b> WordPress Plugins</li>
                            </ul>
                        </div>

                        <div className="tools-used">
                            <h3>Tools Used</h3>
                            <ul>
                                <li>WordPress</li>
                                <li>WooCommerce</li>
                                <li>PHP</li>
                                <li>Sass</li>
                                <li>Github</li>
                                <li>Photoshop</li>
                                <li>JavaScript</li>
                            </ul>
                        </div>

                        <div className="skills">
                            <h3>Skills Acquired</h3>
                            <ul>
                                <li>WooCommerce custom styling</li>
                                <li>E-Commerce functionailty</li>
                                <li>WordPress syntax</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
               
        
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