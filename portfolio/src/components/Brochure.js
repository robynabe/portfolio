// SINGLE PROJECT PAGE - Holey Moley Doughnuts //

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
//import brochureImg from '../images/brochure-home.png'
import navVid from '../videos/brochure-nav-vid.webm';
import sliderVid from '../videos/brochure-slideshow-vid.webm';

function Brochure() {
    return (
        <main className="single-main">
            <h1>Holey Moley Doughnuts Project</h1>
            <video className="single-main-img" autoPlay loop muted playsInline>
                <source src={sliderVid}
                        type="video/webm"
                        alt="Slick slideshow preview" />
            </video>
            <div className="about-project">
                <h3>What is this project all about?</h3>
                <p>This project was a fun one! My partner and I really had the opportunity to create something
                    from scratch and explore our CSS/Sass skills without border, as the main focus was learning Sass and working
                    collabortively with Github. This was a static, although we wanted it to be laid out more like an ecommerce site would display.
                    Realistically it functions solely as an informational business brochure website. It was built with only in HTML, Sass and 
                    vanilla JavaScript. 
                </p>
            </div>
            <Tabs className="tabs-wrapper">
                <TabList>
                    <Tab><h3>Planning</h3></Tab>
                    <Tab><h3>Development</h3></Tab>
                    <Tab><h3>Reflection</h3></Tab>
                </TabList>

                <TabPanel>
                    <div className="details-container">
                        <p>We started this project browsing Pinterest and Adobe color for design and palette inspiration 
                            and began scribbling out layout idea on paper. As eager as we were to build, our wireframes remained as such. 
                            Once decided on colours and a basic home page layout, we divided and conquered the input of the content and styled the site as a team.
                            The planning process mainly consisted of verbal communication back and forth, as we worked great together and our ideas
                            meshed quite well.
                        </p>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="details-container">
                        <div className="project-details">
                            <div className="tools-used">
                                <h4>Tools Used</h4>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>Sass</li>
                                    <li>Github</li>
                                </ul>
                            </div>
                            <div className="specs">
                                <h4>Project specs</h4>
                                <ul>
                                    <li>Collaborative project: team of 2</li>
                                    <li>Project duration: 4 weeks</li>
                                    <li>Responsiveness: mobile, tablet, desktop</li>
                                    <li>Other: Slick slideshow</li>
                                </ul>
                            </div>
                        </div>
                        <div className="features">
                            <div className="feature-one">
                                <p>Although this project was mainly hard coded, we tried to implement some animations and dynamic features. We added a 
                                    smooth mobile navigation and a product image slideshow on the home page which featured multiple “customer testimonials”.
                                </p>
                                <video autoPlay loop muted playsInline className="nav-vid">
                                    <source src={navVid}
                                            type="video/webm"
                                            alt="Mobile navigation animation preview"/>
                                </video>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="details-container">
                        <p>Our main challenge with this site was using github collaboratively. Because this site was quite small, we had a few merge conflicts and some deleted code. 
                        We overcame this issue quite quickly as we learned more about the functionalities of github and communication was key. This project mainly focused on styling 
                        skills, so our main improvement would be to utilize all the aspects that Sass offers to help organize the styling better and create less work for ourselves.
                        </p> 

                        <h4>Skills Acquired during this project</h4>
                        <ul>
                            <li>Functionality of Sass</li>
                            <li>Slick slideshow manipulation</li>
                            <li>Embedded Google maps</li>
                            <li>Collaborative Github use</li>
                        </ul> 
                    </div>         
                </TabPanel>
            </Tabs>
            <div className="links-container">
                <Link className="link-bck" to="/WooCommerce">
                    <svg width="30px" height="20px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                    <span>The Rolling Pin</span>
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