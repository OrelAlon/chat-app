import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import io from "socket.io-client";
import axios from "axios";

const LiveCodeblockCardAdmin = ({ codeblock, codeblockId }) => {
  const [liveCode, setLiveCode] = useState(null);
  const [socket, setSocket] = useState(null);
  const [adminId, setAdminId] = useState(
    JSON.parse(localStorage.getItem("admin")) || null
  );

  const navigate = useNavigate();

  useEffect(() => {
    const s = io.connect("http://localhost:5000/");
    setSocket(s);

    s.emit("join-room", codeblockId); // joining the room by emitting an event

    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket == null) return;

    socket.emit(codeblockId);

    const handler = (newText) => {
      setLiveCode(newText);
    };
    socket.on("receive-changes", handler);

    return () => {
      socket.off("receive-changes", handler);
      socket.emit("leave-room", codeblockId);
      socket.disconnect();
    };
  }, [socket, codeblockId]);

  const goBackHandler = async () => {
    try {
      await axios.delete("/api/admin/", { params: { adminId: adminId } });
      localStorage.clear();
    } catch (error) {
      console.error("Error deleting user", error);
    }

    navigate("/");
  };

  return (
    <div>
      Admin Page
      <h3>{codeblock.title}</h3>
      <pre>{codeblock.code}</pre>
      <textarea
        rows='15'
        cols='60'
        name='text'
        value={liveCode || codeblock.code}
        readOnly
      ></textarea>
      <br />
      <button onClick={goBackHandler}>Go Back</button>
    </div>
  );
};

export default LiveCodeblockCardAdmin;
