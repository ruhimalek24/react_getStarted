import './App.css';
import getRandomUser from './components';
import Usercard from './components/Usercard';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
    getRandomUser().then((user) => setUser(user.results[0]));
  }, [])
  console.log(user);
  const refresh = () => {
    getRandomUser().then((user) => setUser(user.results[0]));
  }

  return (
    <div className="App">
      {user && <Usercard data={user} />}
      <button onClick={refresh}>Refresh User</button>
    </div>
  );
}

export default App;
