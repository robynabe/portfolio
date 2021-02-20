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
                    <h2>Any content 1</h2>
                </TabPanel>

                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>

                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
            <div className="links-container">
                <Link className="link-fwd" to="/Brochure">Holey Moley Doughnuts</Link>
                <Link className="link-bck" to="/MovieApp">Cineflix</Link>
            </div>

        </main>
    
);
    

}
export default MockUp;