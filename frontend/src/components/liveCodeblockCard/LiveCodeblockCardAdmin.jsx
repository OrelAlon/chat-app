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
    // connecting to the chat server with render
    const s = io.connect("https://chat-app-rqlq.onrender.com/");
    setSocket(s);

    s.emit("join-room", codeblockId); // joining the room by emitting an event

    return () => {
      s.disconnect();
    };
  }, []);

  useEffect(() => {
    if (socket == null) return;

    socket.emit(codeblockId);
    // setting up a listener for the "receive-changes" event

    const handler = (newText) => {
      setLiveCode(newText);
    };
    socket.on("receive-changes", handler);

    return () => {
      // removing the listener, leaving the room, and disconnecting the socket

      socket.off("receive-changes", handler);
      socket.emit("leave-room", codeblockId);
      socket.disconnect();
    };
  }, [socket, codeblockId]);

  useEffect(() => {
    // if the user close the window activ goBackHandler func

    window.addEventListener("beforeunload", goBackHandler);

    return () => {
      window.removeEventListener("beforeunload", goBackHandler);
    };
  }, []);

  const goBackHandler = async () => {
    try {
      // delete admin from the backend and clear localStorage
      await axios.delete("/api/admin/", { params: { adminId: adminId } });
      localStorage.clear();
    } catch (error) {
      console.error("Error deleting user", error);
    }

    navigate("/");
  };

  return (
    <div>
      <h3>Admin Page</h3>

      <h4>{codeblock.title}</h4>
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
