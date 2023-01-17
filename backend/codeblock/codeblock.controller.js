const Codeblock = require("./codeblock.schema");

// get one codeblock
const getCodeblock = async (req, res) => {
  const codeblockId = req.query.id;
  const codeblock = await Codeblock.findById(codeblockId);

  res.status(200).json(codeblock);
};
// get all codeblocks
const getCodeblocks = async (req, res) => {
  const codeblocks = await Codeblock.find();
  res.status(200).json(codeblocks);
};

// create new code
const createCodeblock = async (req, res) => {
  const codeblock = await Codeblock.create({
    title: req.body.title,
    code: req.body.code,
  });
  res.status(200).json(codeblock);
};

// delete new code
const deleteCodeblock = async (req, res) => {
  const codeblock = await Codeblock.findByIdAndDelete(req.params.id);

  res.status(200).json({ message: `delete ${req.params.id}` });
};

module.exports = {
  getCodeblock,
  getCodeblocks,
  createCodeblock,
  deleteCodeblock,
};
