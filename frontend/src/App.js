import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import io from "socket.io-client";
import LobbyPage from "./pages/lobbyPage/LobbyPage";
import CodeblockPage from "./pages/codeblockPage/CodeblockPage";

import axios from "axios";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const socket = io.connect("http://localhost:5000/");

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`/api/codeblock/`);
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<LobbyPage data={data} />} />
          <Route path='/codeblock/:id' element={<CodeblockPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
