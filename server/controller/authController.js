import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../model/user.js";

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    let user = await User.findOne({ username });

    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "12h" },
      (err, token) => {
        if (err) throw err;
        res.json({ username: username, token: token });
      }
    );
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err });
  }
};
export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Check if the email is already registered
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ error: "user already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword, // Hashed password
    });

    // Save the user to the database
    await newUser.save();

    // Generate JWT token
    const payload = { user: { id: newUser.id } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "12h",
    });

    // Return success response with token
    res.status(201).json({ username: username, token: token });
  } catch (error) {
    console.error("Error in signup:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
