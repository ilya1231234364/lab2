const path = require('path');
const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError');

const globalErrorHandler = require('./controllers/errorController');

const workerRouter = require('./routes/workerRouter');
const reportRouter = require('./routes/reportRouter');
const inventoryRouter = require('./routes/inventoryRouter');
const distributorRouter = require('./routes/distributorRouter');
const customerRouter = require('./routes/customerRouter');
const farmRouter = require('./routes/farmRouter');

//creating server
const app = express();

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// 1) GLOBAL MIDDLEWARE

// Development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser, reading data from body into req.body
app.use(express.json({ limit: '100kb' }));
app.use(express.urlencoded({ extended: true, limit: '100kb' }));

// Test middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

//ROUTES

//api
app.use('/workers', workerRouter);
app.use('/reports', reportRouter);
app.use('/inventory', inventoryRouter);
app.use('/distributors', distributorRouter);
app.use('/customers', customerRouter);
app.use('/farms', farmRouter);

app.use(globalErrorHandler);

//404 handler
app.all('*', (req, res, next) => {
  next(
    new AppError(`Can't find ${req.originalUrl} on this server!`, 404)
  );
});

//Export server
module.exports = app;
