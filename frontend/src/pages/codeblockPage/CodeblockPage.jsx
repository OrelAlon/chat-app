import { useLocation } from "react-router-dom";

const CodeblockPage = () => {
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
