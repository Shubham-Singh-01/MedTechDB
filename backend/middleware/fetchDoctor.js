const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const fetchUser = (req, res, next) => {
  // Get the doctor from the jwt token and session token, and add id to req object
  const token = req.headers['auth-token'];
  const sessionToken = req.headers['session-token'];

  if (!token || !sessionToken) {
    return res.status(401).json({ error: 'Please authenticate using valid tokens' });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    if (data.sessionToken !== sessionToken) {
      return res.status(401).json({ error: 'Invalid session token' });
    }
    req.doctor = data.doctor;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Please authenticate using valid tokens' });
  }
};

module.exports = fetchUser;