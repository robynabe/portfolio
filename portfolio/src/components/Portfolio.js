// SINGLE PROJECT PAGE - Portfolio //

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <main>
            <h1>Portfolio Project</h1>
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
            <div className="links-container">
                <Link className="link-fwd" to="/MovieApp">Cineflix</Link>
                <Link className="link-bck" to="/WooCommerce">The Rolling Pin</Link>
            </div>

        </main>
    
);
    

}
export default Portfolio;

  