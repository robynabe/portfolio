// App Router
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Main from '../components/Main';
import About from '../components/About';

function AppRouter() {
  return (
    <Router>
      <div className="wrapper">
        <Header />
          <Switch>
              <Route path={'/'} exact><Main /></Route>
              <Route path={'/about'}><About /></Route>
          </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
