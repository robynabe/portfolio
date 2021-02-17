// SINGLE PROJECT PAGE - Movie App //

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import MainImg from '../images/movie-app-home.png';
import SwMockup from '../images/sw-mockup-img.png';
import OfMockup from '../images/of-mockup-img.png';
import Top from './Top';

function MovieApp() {
    return (
        <main className="movie-app-main">
            <h1>Cineflix Project</h1>
            <img className="movie-app-img" src={MainImg} alt="React movie app home page"/>
            <div className="about-project">
                <h3>What is this project all about?</h3>
                <p>This project is a dynamic yet simple movie application built with React that 
                    collects real time data through The Movie Database API. 
                </p>
            </div>
            <Tabs className="tabs-wrapper">
                <TabList>
                    <Tab><h3>Planning</h3></Tab>
                    <Tab><h3>Development</h3></Tab>
                    <Tab><h3>Reflection</h3></Tab>
                </TabList>

                <TabPanel>
                    <p>We started this project by sourcing a design through a few previously made high fidelity mockups done in photoshop. We decided 
                        to use the clean, simple layout of one mock and combine it with the fun colours of another. 
                    </p>
                    <div className="movie-img-container">
                        <img src={SwMockup} alt="" />
                        <img src={OfMockup} alt="" />
                    </div>
                    <p>Once our design was confirmed, we decided to divide the pages between us to get the static coding done more efficiently. 
                        Once all the pages had their static content, we worked as a team to make the API calls and implement the dynamic functionality and the favourites button feature.
                    </p>
                </TabPanel>

                <TabPanel>
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
                            <p>The main feature of this project was the ability to “favourite” and “unfavourite movies and store them for later. 
                            They remain in local storage until a new browser is used or the storage is cleared.
                            </p>
                            <p><b>Video of functioning site**</b></p>
                       </div>
                       <div className="feature-two">
                            <p>This feature required manipulation of the API url in order to target either the movies that were Popular, upcoming, 
                                top rated or now playing, which allowed the user to browse more specific movies. 
                            </p>
                            <p><b>Video of functioning site**</b></p>
                       </div>
                       
                   </div>
                </TabPanel>

                <TabPanel>
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
                </TabPanel>
            </Tabs>
            <div className="links-container">
                <Link className="link-fwd" to="/MockUp">Mockup</Link>
                <Link className="link-bck" to="/portfolio">Portfolio</Link>
            </div>
            <Top/>
        </main>
    
);
    

}
export default MovieApp;