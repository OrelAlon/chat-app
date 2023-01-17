import io from "socket.io-client";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import LiveCodeblockCard from "../../components/liveCodeblockCard/LiveCodeblockCard";
import axios from "axios";

const CodeblockPage = () => {
  const [codeblock, setCodeblock] = useState(null);
  // const { codeblock } = useLocation().state;
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
      <LiveCodeblockCard codeblock={codeblock} />
    </div>
  );
};

export default CodeblockPage;
