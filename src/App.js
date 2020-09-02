import React from 'react';
import './App.css';
import axios from "axios";

const App = () =>  {

  updateDB = updateDB.bind(this);

  function updateDB () {
    const userId = 1,
              username = 'Ammon',
              email = 'Ammon@dev.com';
    axios.put(`api/users/${userId}/?username=${username}&email=${email}`).then(res =>{
      console.log(res.data)
    }).catch (err => console.log(err));
  }

  return (
    <div className="App">
      <button onClick={() => updateDB()}> CLICK ME</button>

    </div>
  );
}

export default App;
