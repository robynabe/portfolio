// SINGLE PROJECT PAGE - Movie App //

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import favVid from '../videos/react-movie-app-fav-video.webm';
import sortVid from '../videos/react-movie-app-sorting-vid.webm';
import SimpleSlider from '../utilities/movieSlick';

function MovieApp() {

    return (
        <main className="single-main">
            <h1>Cineflix Project</h1>
            <SimpleSlider />
                <div className="single-links">
                    <a className="link-left" href="https://github.com/robynabe/portoflio" rel="noreferrer" target="_blank">Github Repo</a>
                    <a className="link-right" href="#0" target="_blank">Live Project</a>
                </div>
                <div className="about-project">
                <h2>What's this all about?</h2>
                <p>This project is a dynamic yet simple movie application built with React that 
                    collects real time data through The Movie Database API. It started as a high fidelity mockup and photoshop,
                    where two separate designs were merged into one. It was then transformed into a fully functioning website.
                </p>
                <ul>
                    <li><i className="fab fa-react"></i></li>
                    <li><i className="fab fa-github"></i></li>
                    <li><i className="fab fa-js-square"></i></li>
                    <li><i className="fab fa-sass"></i></li>
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
                            <p>This Project was built around two main features, both which required quite a bit of JavaScript,
                                external data use and teamwork. </p>
                                <h3><span></span><b>1.</b> The Favourites Feature</h3>

                                <div className="feature-details">
                                    <video autoPlay loop muted playsInline className="favourites-vid">
                                    <source src={favVid}
                                            type="video/webm"
                                            alt="Favourites button function preview"/>
                                    </video>

                                    <p>This feature was created after successful API connection in order to allow users to select and store movies for later for a more
                                        interactive atmosphere. We are provided the ability to favourite movies from multiple categories and pages, as well as 
                                        unfavourite movies they no longer wanted. These selections used local stoarge for memory.
                                    </p>
                                </div>
                        </div>
                        <div className="feature">
                            <h3><span></span><b>2.</b> The Sorting Feature</h3>

                            <div className="feature-details">
                                 <video autoPlay loop muted playsInline className="sorting-vid">
                                <source src={sortVid}
                                        type="video/webm"
                                        alt="Movie sorting function preview"/>
                                </video>

                                <p>This feature required manipulation of the API url in order to target different data from the database. It pulled movies from four
                                    different categories: Popular, Now Playing, Top Rated and Coming Soon.
                                </p>
                            </div>
                        </div>                
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="details-container">
                        <div className="project-details">
                            <div className="tools-used">
                                <h3>Tools Used</h3>
                                <ul>
                                    <li>React</li>
                                    <li>JavaScript</li>
                                    <li>HTML</li>
                                    <li>Sass</li>
                                    <li>Github</li>
                                    <li>Photoshop</li>
                                    <li>Gulp</li>
                                </ul>
                            </div>
                            <div className="specs">
                                <h3>Project specs</h3>
                                <ul>
                                    <li><b>Project Type: </b> Collaborative, team of three</li>
                                    <li><b>Project Duration: </b> 5 weeks</li>
                                    <li><b>Responsiveness: </b> mobile, tablet, desktop</li>
                                    <li><b>Other Specs: </b> The Movie Database API</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="details-container">
                        <p>This project did not go without its problems. We definitely fought some battles with the favourites button feature and local storage. 
                            We needed this button to work both on the home page as well as on the selected individual movie page. 
                        </p>
                        <p>To overcome these issues we spent a lot of time commenting out code and taking it back to square one to source the issues. 
                            We worked as a team to do so, as more brains are better than one. Most importantly, we knew when to ask for help.
                        </p>
                        <p>There is always room for improvement and for this project in particular we could have created more external functions/components 
                        so that they could be used in a global manner throughout the project. This would overall the organisation as well.
                        </p>
                        <h3>Skills Acquired</h3>
                        <ul>
                            <li>API calls</li>
                            <li>React syntax</li>
                            <li>Local storage use</li>
                        </ul>
                    </div>
                </TabPanel>
            </Tabs>
            <div className="links-container">
                <Link className="link-bck" to="/MockUp">
                    <svg width="30px" height="20px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                    <span>Mockup</span>
                </Link>
                <Link className="link-fwd" to="/portfolio">
                    <span>Portfolio</span>
                    <svg width="30px" height="20px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </Link>
            </div>
        </main>
    
);
    

}
export default MovieApp;