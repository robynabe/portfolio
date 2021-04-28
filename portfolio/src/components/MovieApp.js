// SINGLE PROJECT PAGE - Movie App //
import { Link } from 'react-router-dom';
import favVid from '../videos/react-movie-app-fav-video.mp4';
import sortVid from '../videos/react-movie-app-sorting-vid.mp4';
import SimpleSlider from '../utilities/movieSlick';
import MetaTags from 'react-meta-tags';

function MovieApp() {
    window.scrollTo(0,0);

    return (
        <main className="single-main">
            <MetaTags>
                <title>Robyn Abe • Movie App</title>
                <meta name="description" content="A development project of a functioning movie application using real time data built
                                                with React, Javascript, HTML, CSS and SASS to showcase the technical and design skills
                                                of a web developer" />
                <meta property="og:title" content="React movie app" />     
            </MetaTags>

            <h1>Cineflix Movie App</h1>
            <SimpleSlider />

            <div className="single-links">
                <a className="link-left" href="https://github.com/robynabe/react-movie-app" rel="noreferrer" target="_blank">Github Repo</a>
                <a className="link-right" href="https://www.robynabe.com/react-movie-app" rel="noreferrer" target="_blank">Live Project</a>
            </div>

            <div className="about-project">
                <h2>What's this project all about?</h2>
                <p>This project is a dynamic yet simple movie application built with React that 
                    collects real time data through The Movie Database API. It started as a high fidelity mockup in photoshop,
                    where two separate designs were merged into one. It was then transformed into a fully functioning website.
                </p>
                <ul>
                    <li><i className="fab fa-react"></i></li>
                    <li><i className="fab fa-github"></i></li>
                    <li><i className="fab fa-js-square"></i></li>
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
                            <source src={favVid}
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
                            <source src={sortVid}
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
                    <h2>Tools and Skills</h2>
                    <div className="project-details">

                        <div className="specs">
                            <h3>Project Specs</h3>
                            <ul>
                                <li><b>Project Type: </b> Collaborative, team of 3</li>
                                <li><b>Project Duration: </b> 5 weeks</li>
                                <li><b>Responsiveness: </b> mobile, tablet, desktop</li>
                                <li><b>Other Specs: </b> The Movie Database API</li>
                            </ul>
                        </div>

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

                        <div className="skills">
                            <h3>Skills Acquired</h3>
                            <ul>
                                <li>API calls</li>
                                <li>React syntax</li>
                                <li>Mapping</li>
                                <li>Local storage use</li>
                            </ul>
                        </div>

                    </div>
                </div>
                
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