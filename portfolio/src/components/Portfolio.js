// SINGLE PROJECT PAGE - Portfolio //

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Link } from 'react-router-dom';

function Portfolio() {
    return (
        <main>
            <h1>Portfolio</h1>
            <Tabs>
                <TabList>
                    <Tab><h3>Planning</h3></Tab>
                    <Tab><h3>Development</h3></Tab>
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
                <Link className="link-bck" to="/MovieApp">
                    <svg width="30px" height="20px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                    <span>Cineflix</span>
                </Link>
                <Link className="link-fwd" to="/WooCommerce">
                    <span>WooCommerce</span>
                    <svg width="30px" height="20px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </Link>
            </div>

        </main>
    
);
    

}
export default Portfolio;

  