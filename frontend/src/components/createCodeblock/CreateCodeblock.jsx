import { useState } from "react";

import "./createCodeblock.css";

const CreateCodeblock = () => {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");
  const [solution, setSolution] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
        />
      </label>
      <br />
      <label>
        Code:
        <input
          className='form-input'
          type='text'
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
      </label>
      <br />
      <label>
        Solution:
        <input
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
