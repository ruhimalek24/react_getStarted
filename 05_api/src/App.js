import { useState, useEffect } from 'react';
import './App.css';
import getPost from './components';
import PostCard from './components/PostCard';

function App() {

  const [data, setData] = useState(null);

  useEffect(() => {
    getPost().then((post) => setData(post));
  }, [])

  return (
    <div className="App">
      {
        data ? data.map((i) => <PostCard title={i.title} body={i.body} />) : <p>No Data:(</p>
      }
    </div>
  );
}

export default App;
