// SINGLE PROJECT PAGE - The Rolling Pin //

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';

function WooCommerce() {
    window.scrollTo(0,0);
    return (
        <main>
            <h1>The Rolling Pin</h1>
            <Tabs>
                <TabList>
                    <Tab><h3>Process</h3></Tab>
                    <Tab><h3>Toolkit</h3></Tab>
                    <Tab><h3>Reflection</h3></Tab>
                </TabList>

                <TabPanel>
                    <div className="details-container">Coming Soon!</div>
                </TabPanel>

                <TabPanel>
                    <div className="details-container">Coming Soon!</div>
                </TabPanel>

                <TabPanel>
                    <div className="details-container">Coming Soon!</div>
                </TabPanel>
            </Tabs>

            <div className="links-container">

                <Link className="link-bck" to="/portfolio">
                    <svg width="30px" height="20px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                    <span>Portfolio</span>
                </Link>

                <Link className="link-fwd" to="/Brochure">
                    <span>Brochure</span>
                    <svg width="30px" height="20px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </Link>

            </div>
        </main> 
    );
}
export default WooCommerce;