
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>

      <Routes>
        <Route exact path='/' element = {<Home />}>
      </Route>

      <Route exact path = '/company' element = {<Company />}></Route>

      <Route exact path = '/contact' element = {<Contact />}></Route>

      <Route exact path = '/newproject' element = {<NewProject />}></Route>






      <p>Footer</p>
    </Routes>
    </Router>
  );
}

export default App;
