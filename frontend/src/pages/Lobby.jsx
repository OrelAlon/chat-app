import React from "react";

const Lobby = ({ data }) => {
  console.log("data");
  console.log(data);
  return (
    <div>
      Lobby
      <p>test</p>
      {data.map((el) => (
        <p>{el.title}</p>
      ))}
    </div>
  );
};

export default Lobby;
