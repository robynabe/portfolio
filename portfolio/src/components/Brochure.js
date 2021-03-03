// SINGLE PROJECT PAGE - Holey Moley Doughnuts //

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import navVid from '../videos/brochure-nav-vid.webm';
import sliderVid from '../videos/brochure-slideshow-vid.webm';

function Brochure() {
    window.scrollTo(0,0);
    return (
        <main className="single-main">
            <h1>Business Brochure</h1>

            <video className="single-main-img" autoPlay loop muted playsInline>
                <source src={sliderVid}
                        type="video/webm"
                        alt="Slick slideshow preview of brochure website" />
            </video>

            <div className="single-links">
                    <a className="link-left" href="https://github.com/robynabe/business-brochure" rel="noreferrer" target="_blank">Github Repo</a>
                    <a className="link-right" href="https://www.robynabe.com/business-brochure/" rel="noreferrer" target="_blank">Live Project</a>
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
            
            <Tabs className="tabs-wrapper">
                <TabList>
                    <Tab><h3>Features</h3></Tab>
                    <Tab><h3>ToolKit</h3></Tab>
                    <Tab><h3>Reflection</h3></Tab>
                </TabList>

                <TabPanel>
                    <div className="details-container">
                        <div className="feature brochure">

                            <div>
                                <h3><span></span><b>1.</b> Mobile Navigation</h3>
                                <p>Although this project was mainly hard coded, we tried to implement some animations and dynamic features. We added a 
                                    smooth mobile navigation and a product image slideshow on the home page which featured multiple “customer testimonials”.
                                </p>
                            </div>

                            <video autoPlay loop muted playsInline className="nav-vid">
                                <source src={navVid}
                                        type="video/webm"
                                        alt="Mobile navigation animation preview"/>
                            </video>

                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="details-container">
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

                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="details-container">

                        <div className="reflection">
                            <div>
                                <h3><span></span><b>1.</b> The Challenges</h3>
                                <p>The most challenging part of this project was using github collaboratively for the first time, as this site was quite small.</p>
                            </div>
                            <div>
                                <h3><span></span><b>2.</b> The Solution</h3>
                                <p>We overcame this challenge very quickly as we learned the ins and outs of github and communicated frequently.
                                </p>
                            </div>
                            <div>
                                <h3><span></span><b>3.</b> The Improvements</h3>
                                <p>This project mainly focused on styling skills, so our main improvement would be to utilize all the aspects that 
                                Sass offers to help organize the styling better and create less work for ourselves. </p>
                            </div>
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
                </TabPanel>
            </Tabs>
            <div className="links-container">

                <Link className="link-bck" to="/">
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