import { useState, useEffect } from "react";

import io from "socket.io-client";

const LiveCodeblockCard = ({ codeblock }) => {
  const [liveCode, setLiveCode] = useState(null);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const s = io.connect("http://localhost:5000/");
    setSocket(s);

    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket == null) return;

    const handler = (newText) => {
      setLiveCode(newText);
    };
    socket.on("receive-changes", handler);

    return () => {
      socket.off("receive-changes", handler);
    };
  }, [socket]);

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setLiveCode(newText);
    socket.emit("send-changes", newText);
  };

  return (
    <div>
      LiveCodeblockCard
      <h3>{codeblock.title}</h3>
      <pre>{codeblock.code}</pre>
      <form action='/form/submit' method='GET'>
        <textarea
          rows='15'
          cols='60'
          name='text'
          value={liveCode || codeblock.code}
          onChange={handleTextChange}
        ></textarea>
        <br />
        <input type='submit' value='submit' />
      </form>
    </div>
  );
};

export default LiveCodeblockCard;
