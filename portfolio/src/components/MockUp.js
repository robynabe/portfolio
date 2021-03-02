// SINGLE PROJECT PAGE - Mockup //

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import SimpleSlider from '../utilities/mockupSlick';
import layerImg from '../images/photoshop-layers.png';
import guideImg from '../images/photoshop-guides.png';

function MockUp() {
    window.scrollTo(0,0);
    return (
        <main className="single-main">
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

            <Tabs className="tabs-wrapper">
                <TabList>
                    <Tab><h3>Process</h3></Tab>
                    <Tab><h3>Toolkit</h3></Tab>
                    <Tab><h3>Reflection</h3></Tab>
                </TabList>

                <TabPanel>
                    <div className="details-container">

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

                </TabPanel>

                <TabPanel>
                    <div className="details-container">
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
                        </div>
                    </div>

                </TabPanel>

                <TabPanel>
                    <div className="details-container">

                        <div className="reflection">
                            <div>
                                <h3><span></span><b>1.</b> The Challenges</h3>
                                <p>The most challenging part of this project was the learning curve of adobe applications. It was challenging trying
                                    to find the tool or menu that would accomplish the task I was trying to complete. 
                                </p>
                            </div>
                            <div>
                                <h3><span></span><b>2.</b> The Solution</h3>
                                <p>There is an abundacen of resources online for photoshop/illustrator including articles, videos, blogs etc. There was
                                    usually someone else out there that had also experienced the challenges that I was experiencing. Repetition is key for 
                                    learning these porgrams.
                                </p>
                            </div>
                            <div>
                                <h3><span></span><b>3.</b> The Improvements</h3>
                                <p>I would like to improve the usibility of this potential site from a design standpoint. I found that 
                                    the rating bars were too distracting and pulled the main focus away from the movie posters themselves. 
                                </p>
                            </div>
    
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
                </TabPanel>
            </Tabs>
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
export default MockUp;