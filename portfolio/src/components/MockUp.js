// SINGLE PROJECT PAGE - Mockup //

import { Link } from 'react-router-dom';
import SimpleSlider from '../utilities/mockupSlick';
import layerImg from '../images/photoshop-layers.png';
import guideImg from '../images/photoshop-guides.png';
import MetaTags from 'react-meta-tags';

function MockUp() {
    window.scrollTo(0,0);
    return (
        <main className="single-main">
            <MetaTags>
                <title>Robyn Abe • Photoshop Design</title>
                <meta name="description" content="An Adobe Photoshop website mock up that could be used as a design for a working website" />
                <meta property="og:title" content="Photoshop Movie Mockup" />     
            </MetaTags>

            <h1>Movie App Mockup</h1>
    
            <SimpleSlider />

            <div className="about-project">
                <h2>What is this project all about?</h2>
                <p>This project is a high fidelity mockup made in Adobe Photoshop for a movie application. 
                    It did not involve any code, as it was completely focused on the design and the use of 
                    Adobe Photoshop and Illustrator. The idea was to make a mockup using proper layering techniques and precision. 
                </p>

                <div className="mockup-tools">
                    <p><b>Photoshop</b></p>
                    <p><b>Illustrator</b></p>
                </div>
            </div>

            <div className="details-container">
                <h2>Project Features</h2>

                <div className="feature">
                    <div>
                        <h3><span></span><b>1.</b>The Start</h3>
                        <p>I started this project by finding inspiration for colour and design through other movie applications, pinterest and adobe colours. </p>
                    </div>
                    <div>
                        <h3><span></span><b>2.</b>The Process</h3>
                        <p>I began by making the page folders and color coordinating them so that I could later match each new layer to their associated folder.
                            I resized all the project images appropriately and placed them first using guides. This helped me to visualize where the rest of the 
                            content would go, in order of importance. I used the guides from the images to space and align the rest of the page, while adding more
                            along the way to keep consistency. I created a logo using Adobe Illustrator and a simple gradient and copied this gradient in blending
                            options in photoshop to create the rating bars. After all the content was complete, I organized all the hover states and "functional"
                            features into folders so that, in theory, someone could use this to see how the application would work in real time.
                        </p>
                    </div>

                    <div className="mockup-img-wrapper">
                        <img src={layerImg} alt="Photoshop layer folders"/>
                        <img src={guideImg} alt="Photoshop guides"/>
                    </div>
                </div>

            </div>
  
            <div className="details-container">
                    <h2>Tools and Skills</h2>
                <div className="project-details">

                    <div className="specs">
                        <h3>Project specs</h3>
                        <ul>
                            <li><b>Project Type:</b> Individual</li>
                            <li><b>Project Duration:</b> 4 weeks</li>
                            <li><b>Responsiveness:</b> desktop, mobile </li>
                        </ul>
                    </div>

                    <div className="tools-used">
                        <h3>Tools Used</h3>
                        <ul className="adobe-tools">
                            <li>Adobe Photoshop</li>
                            <li>Adobe Illustrator</li>
                            <li>Adobe fonts</li>
                            <li>Adobe colours</li>
                        </ul>
                    </div>

                    <div className="skills">
                        <h3>Skills Acquired</h3>
                        <ul>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                            <li>Colour gradients</li>
                            <li>Application functionailty</li>
                            <li>Image manipulation</li>
                            <li>Guide use</li>
                            <li>Blending options</li>
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

                <Link className="link-fwd" to="/Portfolio">
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
export default MockUp;