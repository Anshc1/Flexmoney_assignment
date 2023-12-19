const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { validateUserData } = require('./middleware/validationMiddleware');
const { submitForm, completePayment } = require('./controller/formController');
const sequelize = require('./utils/db');
require("dotenv").config();

const app = express();

app.use(cors());

// Middleware

app.use(bodyParser.json());
// Routes
app.post('/submit-form', validateUserData, submitForm);
app.post('/PaymentGateway', validateUserData, completePayment);

app.listen(5000, () => {
  console.log(`Server is running on port ${5000}`);
});



