const AdminUser = require("./admin.schema");

const getAdmin = async (req, res) => {
  try {
    const firstUser = await AdminUser.find();
    res.status(200).json(firstUser);
  } catch (error) {
    res.status(500).json({ message: "Error getting user", error: err });
  }
};

const createAdmin = async (req, res) => {
  const { codeId } = req.body;
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
  const { adminId } = req.query;
  try {
    await AdminUser.findByIdAndDelete(adminId);

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
