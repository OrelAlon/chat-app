import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import socketIOClient from "socket.io-client";

const CodeblockPage = () => {
  const [liveCode, setLiveCode] = useState(null);
  const [socket, setSocket] = useState(null);

  const { codeblock } = useLocation().state;

  if (!codeblock) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{codeblock.title}</h1>
      <pre>{codeblock.code}</pre>
    </div>
  );
};

export default CodeblockPage;
