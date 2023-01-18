import { useNavigate } from "react-router-dom";

import axios from "axios";

import "./codeblockCard.css";

const CodeblockCard = ({ codeblock }) => {
  const navigate = useNavigate();

  const handleOpenCodeblock = async () => {
    const saveFirst = await axios.post("/api/admin", { codeId: codeblock._id });
    if (saveFirst.data.isFirst) {
      localStorage.setItem("admin", JSON.stringify(saveFirst.data._id));
    }
    navigate(`/codeblock/${codeblock._id}`);
  };
  const deleteCodeblock = async () => {
    if (window.confirm(`Are you sure you want to delete ${codeblock.title}?`)) {
      try {
        await axios.delete(`/api/codeblock/${codeblock._id}`);
        window.location.reload(false);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <div className='codeblock-card'>
      <p> {codeblock.title}</p>
      <button onClick={handleOpenCodeblock}>let's code</button>
      <p className='delete-codeblock' onClick={deleteCodeblock}>
        X
      </p>
    </div>
  );
};

export default CodeblockCard;
