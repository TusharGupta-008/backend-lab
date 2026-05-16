import User from "../models/user.model.js";

const signUp = async (req, res) => {
  try {
    const { firstName, lastName, age, email, password, userName } = req.body;

    if (!firstName || !lastName || !age || !email || !password || !userName) {
      return res.status(400).json({
        message: "Send all the details Behan ke lode ",
      });
    }
    const existingUser = User.findOne({ email });

    if (existingUser) {
      res.status(400).json({
        message: "Behan ke lode pagal wagal hai kya dobara mat bana",
      });
    }

    


  } catch (error) {
    console.log(error);
    return res.status(500).json("error : ", error);
  }
};
