// SINGLE PROJECT PAGE - Holey Moley Doughnuts //

import { Link } from 'react-router-dom';
import navVid from '../videos/brochure-nav-vid.mp4';
import sliderVid from '../videos/brochure-slideshow-vid.mp4';
import MetaTags from 'react-meta-tags';

function Brochure() {
    window.scrollTo(0,0);
    return (
        <main className="single-main">
            <MetaTags>
                <title>Robyn Abe • Business Brochure</title>
                <meta name="description" content="A project developed by Robyn Abe using HTML, CSS, SASS and Vanilla JavaScript
                                                  showcasing the design side of front-end development" />
                <meta property="og:title" content="Business brochure project" />     
            </MetaTags>

            <h1>Business Brochure</h1>

            <video className="single-main-img" autoPlay loop muted playsInline>
                <source src={sliderVid}
                        type="video/mp4"
                        alt="Slick slideshow preview of brochure website" />
            </video>

            <div className="single-links">
                    <a className="link-left" href="https://github.com/robynabe/business-brochure" rel="noreferrer" target="_blank">Github Repo</a>
                    <a className="link-right" href="https://www.robynabe.com/business-brochure" rel="noreferrer" target="_blank">Live Project</a>
            </div>

            <div className="about-project">
                <h2>What is this project all about?</h2>
                <p>This project is a static business brochure website where my partner and I had the opportunity to create something
                    from scratch and explore our CSS/Sass skills without border. The main focus was learning Sass and working
                    collabortively with Github. It was built with only in HTML, Sass and vanilla JavaScript. 
                </p>

                <ul>
                    <li><i className="fab fa-html5"></i></li>
                    <li><i className="fab fa-github"></i></li>
                    <li><i className="fab fa-js-square"></i></li>
                    <li><i className="fab fa-sass"></i></li>
                </ul>
            </div>

            <div className="details-container">
                <h2>Project Features</h2>
                <div className="feature brochure">

                    <div>
                        <h3><span></span><b>1.</b> Mobile Navigation</h3>
                        <p>Although this project was mainly hard coded, we tried to implement some animations and dynamic features. We added a 
                            smooth mobile navigation and a product image slideshow on the home page which featured multiple “customer testimonials”.
                        </p>
                    </div>

                    <video autoPlay loop muted playsInline className="nav-vid">
                        <source src={navVid}
                                type="video/mp4"
                                alt="Mobile navigation animation preview"/>
                    </video>

                </div>
            </div>
                
            <div className="details-container">
                    <h2>Tools and Skills</h2>
                <div className="project-details">

                    <div className="specs">
                        <h3>Project specs</h3>
                        <ul>
                            <li><b>Project Type:</b> Collaborative, team of 2</li>
                            <li><b>Project Duration:</b> 4 weeks</li>
                            <li><b>Responsiveness:</b> mobile, tablet, desktop</li>
                            <li><b>Other Specs:</b> Slick Slideshow</li>
                        </ul>
                    </div>

                    <div className="tools-used">
                        <h3>Tools Used</h3>
                        <ul>
                            <li>HTML</li>
                            <li>Sass</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Github</li>
                            <li>JQuery</li>
                        </ul>
                    </div>

                    <div className="skills">
                    <h3>Skills Acquired</h3>
                    <ul>
                        <li>Functionality of Sass</li>
                        <li>Slick slideshow manipulation</li>
                        <li>Embedded Google maps</li>
                        <li>Collaborative Github use</li>
                    </ul> 
                </div>

                </div>
            </div>       

            <div className="links-container">

                <Link className="link-bck" to="/WooCommerce">
                    <svg width="30px" height="20px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                    <span>E-Commerce</span>
                </Link>

                <Link className="link-fwd" to="/MockUp">
                    <span>Mockup</span>
                    <svg width="30px" height="20px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </Link>
                
            </div>
        </main>
    );
}
export default Brochure;