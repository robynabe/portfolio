// App Router
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import MovieApp from '../components/MovieApp';
import Brochure from '../components/Brochure';
import MockUp from '../components/MockUp';
import WooCommerce from '../components/WooCommerce';
import Tracker from './tracker';

function AppRouter() {
  return (
    <Router>
      <Tracker />
      <div className="wrapper">
        <Header />
          <Switch>
              <Route path={'/'} exact><Main /></Route>
              <Route path={'/about'}><About /></Route>
              <Route path={'/MovieApp'}><MovieApp /></Route>
              <Route path={'/Portfolio'}><Portfolio /></Route>
              <Route path={'/Brochure'}><Brochure /></Route>
              <Route path={'/MockUp'}><MockUp /></Route>
              <Route path={'/WooCommerce'}><WooCommerce /></Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
