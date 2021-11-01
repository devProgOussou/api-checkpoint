import axios from 'axios';
import { useState, useEffect } from 'react';
import './App.css';
import UserList from './Components/UserList';

const App = () => {
  const [users, setUsers] = useState([]);

  const fecthUsers = async () => {
    await axios.get('https://jsonplaceholder.typicode.com/users')
      .then(function (response) {
        setUsers(response.data);
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    fecthUsers()
  }, [])

  return (
    <div className="App">
      <h1>List Of Users</h1>
      <hr /><br />

      <UserList users={users} />
    </div>
  );
}

export default App;
