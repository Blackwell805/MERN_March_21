import './App.css';
import { Router } from '@reach/router';
import HomeComponent from './views/HomeComponent';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Welcome to CoffeeHub</h1>
        <h2>Your home for all things Monday Coffee</h2>
      </header>
      <Router>
        <HomeComponent path="/" />
      </Router>
    </div>
  );
}

export default App;
