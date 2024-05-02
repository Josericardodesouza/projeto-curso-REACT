




import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

import Home from './components/pages/home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject';


function App() {
  return (

    
      <Router>

        <div>
          <ul>
            <Link to = "/">Home</Link>
            <Link to = "/contact">Contato</Link>
            <Link to = "/company">Empresa</Link>
            <Link to = "/newproject">NewProject</Link>
          </ul>
        </div>

        <Switch>
          <Route exact path = "/">
            <Home />
          </Route>

          <Route path = "/company">
            <Company />
          </Route>

          <Route path = "/contact">
            <Contact />
          </Route>

          <Route path = "/newproject">
             <NewProject />
          </Route>
        </Switch>
    <p>Footer</p>
    </Router>
  );
}

export default App;
