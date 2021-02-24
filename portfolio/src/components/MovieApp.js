// SINGLE PROJECT PAGE - Movie App //

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import swMockup from '../images/sw-mockup-img.png';
import ofMockup from '../images/of-mockup-img.png';
import Top from './Top';
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
                    collects real time data through The Movie Database API. 
                </p>
                <ul>
                    <li><i class="fab fa-react"></i></li>
                    <li><i class="fab fa-github"></i></li>
                    <li><i class="fab fa-js-square"></i></li>
                    <li><i class="fab fa-sass"></i></li>
                </ul>
            </div>
            <Tabs className="tabs-wrapper">
                <TabList>
                    <Tab><h3>Planning</h3></Tab>
                    <Tab><h3>Development</h3></Tab>
                    <Tab><h3>Reflection</h3></Tab>
                </TabList>

                <TabPanel>
                    <div className="details-container">
                        <div className="steps">
                            <h3>1.</h3>
                        <p>We started this project by sourcing a design through a few previously made high fidelity mockups done in photoshop. We decided 
                        to use the clean, simple layout of one mock and combine it with the fun colours of another. 
                        </p>
                    </div>
                    <div className="movie-img-container">
                        <img src={swMockup} alt="Movie application mockup in photoshop" />
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                        <img src={ofMockup} alt="Movie application mockup in photoshop" />
                    </div>
                    <div className="steps">
                        <h3>2.</h3>
                        <p>Once our design was confirmed, we decided to divide the pages between us to get the static coding done more efficiently. 
                            Once all the pages had their static content, we worked as a team to make the API calls and implement the dynamic functionality and the favourites button feature.
                        </p>
                    </div>
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className="details-container">
                        <div className="project-details">
                            <div className="tools-used">
                                <h4>Tools Used</h4>
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
                                <h4>Project specs</h4>
                                <ul>
                                    <li>Collaborative project: team of three</li>
                                    <li>Project duration: 5 weeks</li>
                                    <li>Responsiveness: mobile, tablet, desktop</li>
                                    <li>Other: The Movie Database for data</li>
                                </ul>
                            </div>
                        </div>
                        <div className="features">
                            <div className="feature-one">
                                <div className="steps">
                                    <h3>3.</h3>
                                    <p>Once our static content was in place and our API connection was successful, we were about start
                                    implementing special features and content. The main feature of this project was the “favourite” and 
                                    “unfavourite functionality which made this more app-like as users were able to select movies and store 
                                    them for later. The movies remain in local storage until a new browser is used or the storage is cleared.
                                    </p>
                                </div>
                                <video autoPlay loop muted playsInline className="favourites-vid">
                                    <source src={favVid}
                                            type="video/webm"
                                            alt="Favourites button function preview"/>
                                </video>
                            </div>
                            <div className="feature-two">
                                <div className="steps">
                                    <h3>4.</h3>
                                    <p>Another featured we included required manipulation of the API url in order to target either the movies that were Popular, upcoming, 
                                        top rated or now playing, which allowed the user to browse more specific movies. 
                                    </p>
                                </div>
                                <video autoPlay loop muted playsInline className="sorting-vid">
                                    <source src={sortVid}
                                            type="video/webm"
                                            alt="Movie sorting function preview"/>
                                </video>
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
                        <h4>Skills Acquired</h4>
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
            <Top/>
        </main>
    
);
    

}
export default MovieApp;