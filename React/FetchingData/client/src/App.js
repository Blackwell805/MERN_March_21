import './App.css';
import CompOne from './Components/CompOne';
import FetchData from './Components/FetchData';
import { useState } from 'react';
import {UserContext} from './Contexts/UserContext';
import CompTwo from './Components/CompTwo';
import CompThree from './Components/CompThree';
function App() {
  const [user, setUser] = useState("Cody");
  const [numbers, setNumbers] = useState([1,2,3,4,5]);

  return (
    <div className="App">
      {
        numbers.map((item,i)=><CompThree key={i} index={i}/>)
      }
      <p>{ user }</p>
      <CompOne someUser={ user } changeSomeUser={ setUser } />
      <CompTwo theUserBeingChanged={ user }/>
      {/* <UserContext.Provider value={user}>
        <CompOne />
      </UserContext.Provider> */}
    </div>
  );
}

export default App;
