// SINGLE PROJECT PAGE - Mockup //

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';

function MockUp() {
    return (
        <main>
            <h1>Movie App Mockup Project</h1>
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
            <Link to="/Brochure">Holey Moley Doughnuts</Link>
            <Link to="/MovieApp">Cineflix</Link>

        </main>
    
);
    

}
export default MockUp;