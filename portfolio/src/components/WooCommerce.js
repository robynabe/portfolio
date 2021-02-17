// SINGLE PROJECT PAGE - The Rolling Pin //

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';

function WooCommerce() {
    return (
        <main>
            <h1>The Rolling Pin Project</h1>
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
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/Brochure">Holey Moley Doughnuts</Link>

        </main>
    
);
    

}
export default WooCommerce;