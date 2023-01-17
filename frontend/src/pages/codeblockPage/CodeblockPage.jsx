import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import LiveCodeblockCard from "../../components/liveCodeblockCard/LiveCodeblockCard";
import LiveCodeblockCardAdmin from "../../components/liveCodeblockCard/LiveCodeblockCardAdmin";
import axios from "axios";

const CodeblockPage = () => {
  const [codeblock, setCodeblock] = useState(null);
  const [isAdmin, setIsAdmin] = useState(
    JSON.parse(localStorage.getItem("admin")) || null
  );
  const { id: codeblockId } = useParams();
  useEffect(() => {
    const fetchCodeblock = async () => {
      const res = await axios.get(`/api/codeblock/?id=${codeblockId}`);
      setCodeblock(res.data);
    };
    fetchCodeblock();
  }, []);

  //
  //

  if (!codeblock) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>live coding:</h2>
      {isAdmin ? (
        <LiveCodeblockCardAdmin
          codeblock={codeblock}
          codeblockId={codeblockId}
        />
      ) : (
        <LiveCodeblockCard codeblock={codeblock} codeblockId={codeblockId} />
      )}
    </div>
  );
};

export default CodeblockPage;
