import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import "./codeblockCard.css";

const CodeblockCard = ({ codeblock }) => {
  const navigate = useNavigate();

  const handleClick = async () => {
    const saveFirst = await axios.post("/api/admin", { codeId: codeblock._id });
    if (saveFirst.data.isFirst) {
      localStorage.setItem("admin", JSON.stringify(saveFirst.data.isFirst));
    }
    console.log(saveFirst);
    navigate(`/codeblock/${codeblock._id}`);
  };

  return (
    <div className='codeblock-card'>
      {codeblock.title}
      <p> {codeblock.code}</p>
      <button onClick={handleClick}>let's code</button>
    </div>
  );
};

export default CodeblockCard;
