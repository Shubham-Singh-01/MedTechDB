const express = require("express");
const Doctor = require("../models/Doctor");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const fetchDoctor = require('../middleware/fetchDoctor'); // Import the fetchDoctor middleware
const User = require("../models/User"); // Import the User model

const JWT_SECRET = process.env.JWT_SECRET;
const generateSessionToken = () => {
  // Logic to generate a unique session token
  return Math.random().toString(36).substr(2, 9);
};

// ROUTE:1 Create a doctor using: POST "/api/authdoctor/Createdoctor". No Login Required
router.post(
  "/createdoctor",
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
      let doctor = await Doctor.findOne({ email: req.body.email });
      if (doctor) {
        return res
          .status(400)
          .json({ success, error: "Sorry, a doctor with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      doctor = await Doctor.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data = {
        user: {
          id: doctor.id,
          type: 'doctor'
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

// ROUTE 2: Authenticate a doctor using: POST "/api/authdoctor/logindoctor". No Login Required
router.post(
  "/logindoctor",
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
      let doctor = await Doctor.findOne({ email });
      if (!doctor) {
        success = false;
        return res
          .status(400)
          .json({ error: "Please try to login with correct credentials" });
      }

      const passwordCompare = await bcrypt.compare(password, doctor.password);
      if (!passwordCompare) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Please try to login with correct credentials" });
      }

      const data = {
        doctor: {
          id: doctor.id
        },
        sessionToken: generateSessionToken()
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

// ROUTE 3: Get LoggedIN doctor Details using: GET "/api/authdoctor/getdoctor". Login Required
router.get("/getdoctor", fetchDoctor, async (req, res) => {
  try {
    console.log("Received request to /getdoctor");
    const doctorId = req.doctor.id;
    console.log("Doctor ID:", doctorId);
    const doctor = await Doctor.findById(doctorId).select("-password");
    console.log("Doctor Data:", doctor);
    res.json(doctor);
  } catch (error) {
    console.error("Error in /getdoctor route:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
// ROUTE 4: Update Doctor Data using: PUT "/api/authdoctor/updatedoctor". Login Required
router.put('/updatedoctor', fetchDoctor, async (req, res) => {
  try {
    const doctorId = req.doctor.id;
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

    // Find the doctor by ID and update their data
    const updatedDoctor = await Doctor.findByIdAndUpdate(doctorId, updateObj, { new: true });

    res.json(updatedDoctor);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// ROUTE 5: Get user details using: POST "/api/authdoctor/getuserdetails". Login Required
router.post('/getuserdetails', fetchDoctor, async (req, res) => {
  try {
    const { aadhaarCard, phone1 } = req.body;

    // Query the database to find the user based on aadhaarCard and phone1
    const user = await User.findOne({ aadhaarCard, phone1 });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Omit sensitive fields like password before sending the response
    const userData = user.toObject();
    delete userData.password;

    res.json(userData);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;