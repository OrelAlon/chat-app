import CodeblockCard from "../../components/codeblockCard/CodeblockCard";

import "./lobbyPage.css";

const LobbyPage = ({ data }) => {
  return (
    <div>
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
