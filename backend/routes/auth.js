const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = process.env.JWT_SECRET;
const generateSessionToken = () => {
  // Logic to generate a unique session token
  return Math.random().toString(36).substr(2, 9);
};

// ROUTE:1 Create a User using: POST "/api/auth/Createuser". No Login Required
router.post(
  "/createuser",
  [
    body("name", "Enter a valid name").isLength({ min: 5 }),
    body("password", "Enter a valid 8 Character password").isLength({ min: 8 }),
    body("email", "Enter a valid email").isEmail(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ success, error: "Sorry, a user with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data = {
        user: {
          id: user.id,
          type: 'user'
        },
        sessionToken: generateSessionToken() // Add session token to the response payload
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken, sessionToken: data.sessionToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error");
    }
  }
);

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No Login Required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").exists(),
  ],
  async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Please try to login with correct credentials" });
      }

      const data = {
        user: {
          id: user.id,
          type: 'user'
        },
        sessionToken: generateSessionToken() // Add session token to the response payload
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ success, authtoken, sessionToken: data.sessionToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server error");
    }
  }
);

// ROUTE 3: Get LoggedIN User Details using: POST "/api/auth/getuser". Login Required
router.get("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// ROUTE 4: Update User Data using: PUT "/api/auth/updateuser". Login Required
router.put('/updateuser', fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const formData = req.body; // Assuming the frontend sends the form data directly

    // Remove fields that should not be updated
    const { password, email, __v, ...updateData } = formData;

    // Build the update object with non-empty fields
    const updateObj = Object.entries(updateData).reduce((obj, [key, value]) => {
      if (value !== '' && value !== null && value !== undefined) {
        // Handle numeric fields - convert string to number, but allow 0
        if (key === 'heightFeet' || key === 'heightInches' || key === 'weight' || key === 'experience') {
          const numValue = Number(value);
          // Check if conversion results in a valid number (including 0)
          if (!isNaN(numValue)) {
            obj[key] = numValue;
          }
        }
        // Handle date fields
        else if (key === 'dob') {
          obj[key] = new Date(value);
        }
        // Handle other fields
        else {
          obj[key] = value;
        }
      }
      return obj;
    }, {});

    // Find the user by ID and update their data
    const user = await User.findByIdAndUpdate(userId, updateObj, { new: true });

    res.json(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;