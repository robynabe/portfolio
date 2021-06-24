// SINGLE PROJECT PAGE - Holey Moley Doughnuts //

import { Link } from 'react-router-dom';
import dictionaryImg from "../images/dictionary-app1200.png";
import MetaTags from 'react-meta-tags';

function Dictionary() {
    window.scrollTo(0,0);
    return (
        <main className="single-main">
            <MetaTags>
                <title>Robyn Abe • Dictionary App</title>
                <meta name="description" content="A project developed by Robyn Abe using HTML, CSS, SCSS, JS and React
                                                  showcasing the usage of external APIs and search engines" />
                <meta property="og:title" content="dictionary app project" />     
            </MetaTags>

            <h1>Dictionary App</h1>

            <img src={dictionaryImg} className="single-main-img"/>

            <div className="single-links">
                    <a className="link-left" href="https://github.com/robynabe/dictionary-project-react" rel="noreferrer" target="_blank">Github Repo</a>
                    <a className="link-right" href="https://www.robynabe.com/dictionary-app" rel="noreferrer" target="_blank">Live Project</a>
            </div>

            <div className="about-project">
                <h2>What is this project all about?</h2>
                <p>This project is a dicitonary application with the added flare of images. It was built
                    using React to practice multiple external API manipulation, as well as to highlight search engine functionality.
                    The data is gathered dynamically using Axios to bring in current defintions and images.
                </p>
                <ul>
                    <li><i className="fab fa-react"></i></li>
                    <li><i className="fab fa-github"></i></li>
                    <li><i className="fab fa-js-square"></i></li>
                    <li><i className="fab fa-sass"></i></li>
                </ul>
            </div>
                
            <div className="details-container">
                    <h2>Tools and Skills</h2>
                <div className="project-details">

                    <div className="specs">
                        <h3>Project specs</h3>
                        <ul>
                            <li><b>Project Type:</b> Individual</li>
                            <li><b>Project Duration:</b> 3 weeks</li>
                            <li><b>Responsiveness:</b> mobile, tablet, desktop</li>
                            <li><b>Other Specs:</b> Multiple API</li>
                        </ul>
                    </div>

                    <div className="tools-used">
                        <h3>Tools Used</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Github</li>
                            <li>Axios</li>
                        </ul>
                    </div>

                    <div className="skills">
                    <h3>Skills Acquired</h3>
                    <ul>
                        <li>Axios dependency</li>
                        <li>Search engines</li>
                        <li>Multiple API usage</li>
                        <li>Mapping</li>
                    </ul> 
                </div>

                </div>
            </div>       

            <div className="links-container">

                <Link className="link-bck" to="/Brochure">
                    <svg width="30px" height="20px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                    <span>Brochure</span>
                </Link>

                <Link className="link-fwd" to="/MovieApp">
                    <span>Cineflix</span>
                    <svg width="30px" height="20px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </Link>
                
            </div>
        </main>
    );
}
export default Dictionary;