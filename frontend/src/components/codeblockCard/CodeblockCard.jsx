import "./codeblockCard.css";

const CodeblockCard = ({ codeblock }) => {
  return (
    <div className='codeblock-card'>
      {codeblock.title}
      <p> {codeblock.code}</p>
      <button>code</button>
    </div>
  );
};

export default CodeblockCard;
