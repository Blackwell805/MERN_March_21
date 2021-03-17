import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import PageOne from './views/PageOne';
import PageTwo from './views/PageTwo';
import PageThree from './views/PageThree';
import { Router, Link, Redirect } from '@reach/router';

function App() {
  const [active, setActive] = useState("PageOne")

  useEffect(() => {
    // code for an api request
    setActive("results of that API request");
  }, [])

  return (
    <div className="App">
        <header>
          <h1>Cody's Awesome website</h1>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about/122">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        {/* {
          active === "PageOne" ?
          <PageOne setActive={setActive} />
          : active === "PageTwo" ?
          <PageTwo setActive={setActive} />
          : active === "PageThree" ?
          <PageThree setActive={setActive} />
          :
          ''
        } */}
        <Router>
          <PageOne path="/" active={ active }/>
          <PageTwo path="/about/:searchTerm" />
          <Redirect from="/contactus" to="/contact" noThrow />
          <PageThree path="/contact" active={ active }/>
        </Router>
    </div>
  );
}

export default App;
