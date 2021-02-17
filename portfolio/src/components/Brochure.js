// SINGLE PROJECT PAGE - Holey Moley Doughnuts //

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';

function Brochure() {
    return (
        <main>
            <h1>Holey Moley Doughnuts Project</h1>
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
                <Link className="link-fwd" to="/WooCommerce">The Rolling Pin</Link>
                <Link className="link-bck" to="/MockUp">Mockup</Link>
            </div>

        </main>
    
);
    

}
export default Brochure;