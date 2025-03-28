// user-data.js
app.put('/api/user-data', (req, res) => {
    const { userId, doctorId } = req.session || {};
    
    if (!userId && !doctorId) {
      return res.status(401).json({ error: 'Unauthorized' });
    }
  
    const updatedUserData = req.body.userData;
    if (userId) {
        // Update user-specific data in the database using userId and updatedUserData
        updateUserDataInDatabase(userId, updatedUserData);
    }

    const updatedDoctorData = req.body.doctorData;
    if (doctorId) {
        // Update doctor-specific data in the database using doctorId and updatedDoctorData
        updateDoctorDataInDatabase(doctorId, updatedDoctorData);
    }
    
    res.json({ success: true });
});
