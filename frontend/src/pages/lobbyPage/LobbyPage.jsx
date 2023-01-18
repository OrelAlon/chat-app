import { useState } from "react";

import CodeblockCard from "../../components/codeblockCard/CodeblockCard";
import CreateCodeblock from "../../components/createCodeblock/CreateCodeblock";
import "./lobbyPage.css";

const LobbyPage = ({ data }) => {
  const [showAddCodeblock, setShowAddCodeblock] = useState(false);

  return (
    <div>
      <button
        className='add-btn'
        onClick={() => setShowAddCodeblock(!showAddCodeblock)}
      >
        {showAddCodeblock ? "-" : "+"}
      </button>
      {showAddCodeblock && (
        <CreateCodeblock
          showAddCodeblock={showAddCodeblock}
          setShowAddCodeblock={setShowAddCodeblock}
        />
      )}
      <h2>Let's start practicing some code!</h2>
      <h3>Choose the topic that you want to practice:</h3>
      <div className='codeblocks-cards'>
        {data.map((codeblock, i) => (
          <div key={i}>
            <CodeblockCard codeblock={codeblock} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LobbyPage;
