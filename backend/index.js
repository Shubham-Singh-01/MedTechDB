//index.js backend
// Production deployment - October 19, 2025
require('dotenv').config();
const connectToMongo = require('./db');
const express = require('express');
const cors = require("cors");

const app = express(); // Define the 'app' object here
const port = process.env.PORT || 5000;
const nodeEnv = process.env.NODE_ENV || 'development';

// Connect to MongoDB
connectToMongo();

// CORS Configuration
const corsOptions = {
  origin: process.env.CORS_ORIGIN || '*',
  optionsSuccessStatus: 200,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check Endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    environment: nodeEnv,
    timestamp: new Date().toISOString()
  });
});

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/authdoctor', require('./routes/authDoctor'));
app.use('/api/notes', require('./routes/notes'));
app.use('/api/notesdoctor', require('./routes/notesDoctor'));

// Serve React Frontend (Production Build)
const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Serve frontend for all non-API routes (React Router Support)
app.get('*', (req, res) => {
  // Don't serve index.html for API calls
  if (req.path.startsWith('/api') || req.path === '/health') {
    return res.status(404).json({
      error: 'Route not found',
      path: req.path,
      method: req.method
    });
  }
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  
  const statusCode = err.statusCode || 500;
  const environment = nodeEnv;
  
  // Don't expose stack trace in production
  const errorResponse = {
    error: err.message || 'Internal Server Error',
    statusCode: statusCode,
    ...(environment === 'development' && { stack: err.stack })
  };
  
  res.status(statusCode).json(errorResponse);
});

app.listen(port, () => {
  console.log(`🚀 MedTech Backend listening on port ${port}`);
  console.log(`📊 Environment: ${nodeEnv}`);
  console.log(`🏥 Health check: http://localhost:${port}/health`);
  console.log(`🔗 API Base: http://localhost:${port}/api`);
});
