// SINGLE PROJECT PAGE - Portfolio //
import { Link } from 'react-router-dom';
import PortfolioVid from '../videos/portfolio-vid.mp4';
import PortfolioImg from '../images/portfolio-sorting.png';
import MetaTags from 'react-meta-tags';

function Portfolio() {
    window.scrollTo(0,0);
    return (
        <main className="single-main">
            <MetaTags>
                <title>Robyn Abe • Portfolio</title>
                <meta name="description" content="A webpage showcasing the development behind the portfolio website created with
                                                 HTML, CSS, SASS, React and JavaScript." />
                <meta property="og:title" content="Portfolio Projects" />
            </MetaTags>

            <h1>Portfolio</h1>

            <div className="about-project">
                <h2>What's this project all about?</h2>
                <p>This project is the wesbite you are currently browsing right now! It is my personal portfolio website 
                    showcasing some projects I have completed so far, each highlighting different
                    skills or tools used. Although it is mainly a static website, it is built using React to bring in some dynamism.
                </p>
                <ul>
                    <li><i className="fab fa-react"></i></li>
                    <li><i className="fab fa-js-square"></i></li>
                    <li><i className="fab fa-sass"></i></li>
                    <li><i className="fab fa-html5"></i></li>
                </ul>
            </div>

            <div className="single-links">
                <a className="link-right portfolio" href="https://github.com/robynabe/portfolio" rel="noreferrer" target="_blank">Github Repo</a>
            </div>

            <div className="details-container">
                <h2>Project Features</h2>

                <div className="feature">
                    <h3><span></span><b>1.</b>Internal Sorting - The Outcome</h3>

                    <div className="feature-details">
                            <video autoPlay loop muted playsInline className="sorting-vid">
                        <source src={PortfolioVid}
                                type="video/mp4"
                                alt="Project internal sorting feature"/>
                        </video>

                        <p> This feature sorts through the internal data of the web page to find and display relevant projects. <br/>
                            To accomplish this I use a simple Hook function(useState) to grab the original project information 
                            from an internal object, filter through the data and return only the projects with the correlating categories.</p>
                    </div>
                </div> 

                <div className="feature">
                    <h3><span></span><b>2.</b>Internal Sorting - The Code</h3>

                    <div className="feature-details">
                            <img src={PortfolioImg} alt="Internal sorting code" className="portfolio-code-img"/>
                    </div>
                </div>  

            </div>

            <div className="details-container">
                    <h2>Tools and Skills</h2>
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
            </div>
             
            <div className="links-container">

                <Link className="link-bck" to="/MovieApp">
                    <svg width="30px" height="20px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                    <span>Cineflix</span>
                </Link>

                <Link className="link-fwd" to="/">
                    <span>E-Commerce</span>
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

  