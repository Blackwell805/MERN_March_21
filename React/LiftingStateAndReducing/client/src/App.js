import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Form from './Components/Form';
import Display from './Components/Display';

function App() {
  const [user, setUser] = useState({
      name: "",
      email: "",
      password: ""
  });

  const [userList, setUserList] = useState([]);

  const submitHandler = e => {
    e.preventDefault();
    setUserList([...userList, user]);
    setUser({
      name: "",
      email: "",
      password: ""
    });
  }

  const userChangeHandler = e => {
      setUser({
          ...user,
          [e.target.name]: e.target.value
      });
  }
  return (
    <div className="App">
      <Form 
        changeHandler={ userChangeHandler }
        submitHandler={ submitHandler }
        user={ user }
      />
      <Display 
        userList={ userList }
      />
    </div>
  );
}

export default App;


// STEPS FOR LIFTING STATE
// 1. Identify a shared component that the 2 components you need to pass data 
// between exist in
// 2. Identify which component should be responsible for modifying state
// and pass the function into that component
// 3. Identify which component needs the data and pass that part of state
// into that component