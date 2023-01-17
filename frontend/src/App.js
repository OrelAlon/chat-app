import { useState, useEffect } from "react";

import Lobby from "./pages/Lobby";
import axios from "axios";

import "./App.css";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/codeblock/`);
      setData(res.data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <p></p>
        {data && <Lobby data={data} />}
        <a>Learn React</a>
      </header>
    </div>
  );
}

export default App;
