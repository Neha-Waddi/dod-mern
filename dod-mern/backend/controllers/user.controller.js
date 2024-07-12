import User from "../models/user.model.js";

const signup = async (req, res) => {
  try {
    const { userName, password, domainName, url } = req.body;

    const exist = await User.findOne({ where: { userName: userName } });
    if (exist) {
      return res.status(400).json({ message: "Username already taken" });
    }

    const user = await User.create({ userName,password, domainName, url });
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: "Error while signing up" });
    console.error("Error while signing up", err);
  }
};

const login = async (req, res) => {
  try {
    const { userName, password } = req.body;
    const exist = await User.findOne({ where: { userName: userName } });
    if (exist) {
      if (password===exist.password) {
        return res.status(200).json({ message: "User logged in successfully" });
      } else {
        return res.status(400).json({ message: "Wrong password" });
      }
    } else {
      return res.status(400).json({ message: "Username does not exist" });
    }
  } catch (err) {
    return res.status(500).json({ message: "Internal error while logging in" });
  }
};

export { signup, login };
