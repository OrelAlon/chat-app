import { useState } from "react";

import axios from "axios";

import "./createCodeblock.css";

const CreateCodeblock = ({}) => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [solution, setSolution] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newCodeblock = {
      title: title,
      code: code,
      solution: solution,
    };
    try {
      const createNewCode = await axios.post("/api/codeblock/", newCodeblock);
      window.location.reload(false);
    } catch (error) {}
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          className='form-input'
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Code:
        <textarea
          className='form-input'
          type='text'
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Solution:
        <textarea
          className='form-input'
          type='text'
          value={solution}
          onChange={(e) => setSolution(e.target.value)}
        />
      </label>
      <br />
      <input type='submit' className='form-submit' value='Submit' />
    </form>
  );
};

export default CreateCodeblock;
