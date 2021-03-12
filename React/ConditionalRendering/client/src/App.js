import { useState } from 'react';
import './App.css';
import ComponentOne from './Components/ComponentOne';
import ComponentTwo from './Components/ComponentTwo';

function App() {
  const [username, setUserName] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const checkAdmin = e => {
    const formUName = e.target.value;
    setUserName(formUName)


    formUName === "cody" ?
    setIsAdmin(true)
    :
    setIsAdmin(false);
  }

  return (
    <div className="App">
      <input type="text" name="username" onChange={ checkAdmin }/>
      {
        isAdmin ?
        <ComponentOne />
        :
        <ComponentTwo />
      }

    </div>
  );
}

export default App;
