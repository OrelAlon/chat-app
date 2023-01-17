import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import socketIOClient from "socket.io-client";

import "./codeblockCard.css";

const CodeblockCard = ({ codeblock }) => {
  const [socket, setSocket] = useState(null);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/codeblock/${codeblock._id}`, { state: { codeblock } });
  };

  return (
    <div className='codeblock-card'>
      {codeblock.title}
      <p> {codeblock.code}</p>
      <button onClick={handleClick}>code</button>
    </div>
  );
};

export default CodeblockCard;
