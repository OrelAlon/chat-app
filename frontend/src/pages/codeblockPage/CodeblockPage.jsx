import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import LiveCodeblockCardStudent from "../../components/liveCodeblockCard/LiveCodeblockCardStudent";
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

  // Until the information goes up, user will see this

  if (!codeblock) {
    return <div>Loading...</div>;
  }
  // if this is the first user open LiveCodeblockCardAdmin if not LiveCodeblockCardAdmin

  return (
    <div>
      <h2>live coding:</h2>
      {isAdmin ? (
        <LiveCodeblockCardAdmin
          codeblock={codeblock}
          codeblockId={codeblockId}
        />
      ) : (
        <LiveCodeblockCardStudent
          codeblock={codeblock}
          codeblockId={codeblockId}
        />
      )}
    </div>
  );
};

export default CodeblockPage;
