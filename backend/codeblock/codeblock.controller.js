const Codeblock = require("./codeblock.schema");

// get one codeblock
const getCodeblock = async (req, res) => {
  try {
    const codeblockId = req.query.id;
    const codeblock = await Codeblock.findById(codeblockId);

    res.status(200).json(codeblock);
  } catch (error) {
    res.status(500).json({ message: "Error getting codeblock", error: err });
  }
};

// get all codeblocks
const getCodeblocks = async (req, res) => {
  try {
    const codeblocks = await Codeblock.find();
    res.status(200).json(codeblocks);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error getting all codeblocks", error: err });
  }
};

// create new code
const createCodeblock = async (req, res) => {
  const { title, code, solution } = req.body;
  try {
    const codeblock = await Codeblock.create({
      title: title,
      code: code,
      solution: solution,
    });
    res.status(200).json(codeblock);
  } catch (error) {
    res.status(500).json({ message: "Error create new codeblock", error: err });
  }
};

// delete code
const deleteCodeblock = async (req, res) => {
  try {
    await Codeblock.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: `delete ${req.params.id}` });
  } catch (error) {
    res.status(500).json({ message: "Error delete codeblock", error: err });
  }
};

module.exports = {
  getCodeblock,
  getCodeblocks,
  createCodeblock,
  deleteCodeblock,
};
