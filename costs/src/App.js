
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Home from './components/pages/home'
import Company from './components/pages/Company'
import Contact from './components/pages/Contact'
import NewProject from './components/pages/NewProject';
import Container from './components/Layout/container';
import NavBar from './components/Layout/NavBar'
import Footer from './components/Layout/Footer'
import Projects from './components/pages/Projects';




function App() {
  return (

    
      <Router>
        <NavBar />

    

        <Switch>
          <Container customClass = "min-height">
          <Route exact path = "/">
            <Home />
          </Route>

          <Route path = "/projects">
            <Projects />
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
          </Container>
        </Switch>
        <Home />
   <Footer />
    </Router>
  );
}

export default App;
