import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./codeblockCard.css";

const CodeblockCard = ({ codeblock }) => {
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
