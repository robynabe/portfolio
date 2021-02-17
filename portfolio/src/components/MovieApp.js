// SINGLE PROJECT PAGE - Movie App //

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';

function MovieApp() {
    return (
        <main>
            <h1>Cineflix Project</h1>
            <Tabs>
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
            <Link to="/MockUp">Mockup</Link>
            <Link to="/portfolio">Portfolio</Link>

        </main>
    
);
    

}
export default MovieApp;