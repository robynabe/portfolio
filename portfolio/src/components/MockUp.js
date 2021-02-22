// SINGLE PROJECT PAGE - Mockup //

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';
import SimpleSlider from '../utilities/mockupSlick';

function MockUp() {
    return (
        <main className="single-main">
            <h1>Movie App Mockup Project</h1>
            <SimpleSlider />
            <div className="about-project">
                <h3>What is this project all about?</h3>
                <p>This project was solely focused on design and the use of Adobe Photoshop and 
                    Illustrator to create a high fidelity mockup for a movie application website. There was no
                    coding here! The idea was to make a mockup using proper layering techniques and to make it as 
                    precise as possible right down to the pixel. 
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
                        <p>I had some colour and a basic design in mind, inspired by other movie app websites and the cineplex colors with a twist.
                        I started by making the page folders and color coordinating them, so that when I started to build upon each layer I could make the associate 
                        layers/folders consistent.
                        </p>
                        <b>image of layers??</b>
                        <p>I then placed the main margins for the footer and header and I began to resize the movie posters as they were the main focus of this 
                            mockup.
                        </p>
                    </div>

                </TabPanel>

                <TabPanel>
                    <div className="details-container">
                        <div className="project-details">
                            <div className="tools-used">
                                <h4>Tools Used</h4>
                                <ul>
                                    <li>Adobe Photoshop</li>
                                    <li>Adobe Illustrator</li>
                                    <li>Adobe fonts</li>
                                    <li>Adobe colours</li>
                                </ul>
                            </div>
                            <div className="specs">
                                <h4>Project specs</h4>
                                <ul>
                                    <li>Individual project</li>
                                    <li>Project duration: 4 weeks</li>
                                    <li>Desktop mockup</li>
                                    <li>Mobile mockup</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </TabPanel>

                <TabPanel>
                    <div className="details-container">
                        <p>Photoshop definitely has a huge learning curve, so my biggest challenge was finding the tools that 
                            would accomplish the task I was looking to complete. There are lots of resources online as photoshop 
                            is quite common to help overcome this challenge. Practice makes perfect. From a design standpoint 
                            I feel that the rating bars were potentially too distracting and pulled the focus away from the movie 
                            posters themselves. Usability is something I would focus more on next time.
                        </p>
                        <h4>Skills Acquired</h4>
                        <ul>
                            <li>Photoshop</li>
                            <li>Illustrator</li>
                        </ul>
                    </div>
                </TabPanel>
            </Tabs>
            <div className="links-container">
                <Link className="link-bck" to="/Brochure">
                    <svg width="30px" height="20px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                    <span>Business Brochure</span>
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