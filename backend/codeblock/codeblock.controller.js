// get all code
const getCodeblocks = async (req, res) => {
  res.status(200).json({ message: "sss" });
};

// create new code
const createCodeblock = async (req, res) => {
  console.log(req.body);
  res.status(200).json({ message: "create" });
};

// delete new code
const deleteCodeblock = async (req, res) => {
  res.status(200).json({ message: `delete ${req.params.id}` });
};

module.exports = {
  getCodeblocks,
  createCodeblock,
  deleteCodeblock,
};
