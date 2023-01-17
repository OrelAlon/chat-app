const AdminUser = require("./admin.schema");

const getAdmin = async (req, res) => {
  const firstUser = await AdminUser.find();
  res.status(200).json(firstUser);
};

const createAdmin = async (req, res) => {
  const { codeId } = req.body;
  console.log(codeId);
  try {
    const firstUser = await AdminUser.findOne({ codeId: codeId });
    if (!firstUser) {
      const newFirstUser = new AdminUser({ codeId, isFirst: true });
      await newFirstUser.save();
      res.json(newFirstUser);
    } else {
      res.json({ message: "First user already exists" });
    }
  } catch (err) {
    res.status(500).json({ message: "Error saving first user", error: err });
  }
};

const deleteAdmin = async (req, res) => {
  try {
    await AdminUser.remove();
    console.log("delete user");

    res.json({ message: "First user deleted" });
  } catch (err) {
    res.status(500).json({ message: "Error delete  user", error: err });
  }
};
module.exports = {
  getAdmin,
  createAdmin,
  deleteAdmin,
};
