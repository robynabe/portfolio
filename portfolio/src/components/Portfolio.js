// SINGLE PROJECT PAGE - Portfolio //

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import PortfolioVid from '../videos/portfolio-vid.webm';
import PortfolioImg from '../images/portfolio-sorting.png';

function Portfolio() {
    window.scrollTo(0,0);
    return (
        <main className="single-main">
            <h1>Portfolio</h1>

            <div className="single-links">
                <a className="link-left" href="https://github.com/robynabe/portfolio" rel="noreferrer" target="_blank">Github Repo</a>
                <a className="link-right" href="#0" target="_blank">Live Project</a>
            </div>

            <div className="about-project">
                <h2>What's this all about?</h2>
                <p>This project is a personal portfolio website showcasing some projects I have completed so far, each highlighting different
                    skills or tools used. Although it is mainly a static website, it is built using React to bring in some dynamism.
                </p>
                <ul>
                    <li><i className="fab fa-react"></i></li>
                    <li><i className="fab fa-js-square"></i></li>
                    <li><i className="fab fa-sass"></i></li>
                    <li><i class="fab fa-html5"></i></li>
                </ul>
            </div>


            <Tabs className="tabs-wrapper">
                <TabList>
                    <Tab><h3>Features</h3></Tab>
                    <Tab><h3>Toolkit</h3></Tab>
                    <Tab><h3>Reflection</h3></Tab>
                </TabList>

                <TabPanel>
                    <div className="details-container">
                        <div className="feature">
                            <h3><span></span><b>1.</b>Internal Sorting - The Outcome</h3>

                            <div className="feature-details">
                                 <video autoPlay loop muted playsInline className="sorting-vid">
                                <source src={PortfolioVid}
                                        type="video/webm"
                                        alt="Project internal sorting feature"/>
                                </video>

                                <p> This feature sorts through the internal data of the web page to find and display relevant projects. <br/>
                                    To accomplish this I use a simple Hook function(useState) to grab the original project information 
                                    from an internal object, filter through the data and return only the projects with the correlating categories</p>
                            </div>
                        </div> 
                        <div className="feature">
                            <h3><span></span><b>2.</b>Internal Sorting - The Code</h3>

                            <div className="feature-details">
                                 <img src={PortfolioImg} alt="Internal sorting code" className="portfolio-code-img"/>
                            </div>
                        </div>   
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="details-container">
                           <div className="project-details">
                            <div className="specs">
                                <h3>Project specs</h3>
                                <ul>
                                    <li><b>Project Type: </b> Individual</li>
                                    <li><b>Project Duration: </b> 5 weeks</li>
                                    <li><b>Responsiveness: </b> mobile, tablet, desktop</li>
                                </ul>
                            </div>
                            <div className="tools-used">
                                <h3>Tools Used</h3>
                                <ul>
                                    <li>React</li>
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>Sass</li>
                                    <li>CSS</li>
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
                                <p>This static website was challenging to make dynmaic, as I wanted to be able to highlight the capabilities of React. It was import
                                    to me to create it this way to practice my skills in this framework.</p>
                            </div>
                            <div>
                                <h3><span></span><b>2.</b> The Solution</h3>
                                <p>I tried to incorporate my own small database of porjects and other external functions to show the simplicity of retrieving data from 
                                    an API-like situation, as well as passing data from one page to another. I also a project sorting feature, along with an npm react-tabs 
                                    to diversify the project.
                                </p>
                            </div>
                            <div>
                                <h3><span></span><b>3.</b> The Improvements</h3>
                                <p>Sometimes I get over enthusiastic about the funcitonality and features that I want to include in the project that I lose focus of my design. 
                                    I would like to work on commiting to a design and sticking with it, as it can always be altered later if need be.
                                </p>
                            </div>
    
                        </div>

                        <div className="skills">
                            <h3>Skills Acquired</h3>
                            <ul>
                                <li>Internal Sorting</li>
                                <li>React Hooks</li>
                                <li>Mapping</li>
                                <li>Page load animations</li>
                                <li>Complex hover effects</li>
                            </ul>
                        </div>

                    </div>
                </TabPanel>
            </Tabs>
            <div className="links-container">
                <Link className="link-bck" to="/MovieApp">
                    <svg width="30px" height="20px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                    <span>Cineflix</span>
                </Link>
                <Link className="link-fwd" to="/">
                    <span>WooCommerce</span>
                    <svg width="30px" height="20px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </Link>
            </div>

        </main>
    
);
    

}
export default Portfolio;

  