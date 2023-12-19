
## Admission and Payment System

This project is a web application that facilitates the admission process and payment for a training program. The system consists of a backend implemented in Node.js with Express, a frontend built using React, and a MySQL database to store user and payment information.

### Project Structure

```
project-root
│
├── backend
│   ├── controller
│   │   └── formController.js
│   ├── middleware
│   │   └── validationMiddleware.js
│   ├── node_modules
│   ├── utils
│   │   └── db.js
│   ├── .env
│   ├── index.js
│   ├── package-lock.json
│   └── package.json
│
└── frontend
    ├── public
    ├── src
    │   ├── components
    │   │   ├── AdmissionForm.js
    │   │   └── PaymentForm.js
    │   ├── App.css
    │   ├── App.js
    │   ├── index.css
    │   ├── index.js
    │   └── logo.svg
    ├── .gitignore
    ├── package-lock.json
    └── package.json
```

### Backend

#### Controllers

- `formController.js`: Manages the submission of admission forms and completion of payments. Handles database interactions for user and payment information.

#### Middleware

- `validationMiddleware.js`: Provides middleware for validating user data before processing admission or payment.

#### Utils

- `db.js`: Configures a MySQL database connection using the `mysql2` library and reads database credentials from the `.env` file.

#### Entry Point

- `index.js`: The main entry point for the Node.js backend. Configures Express, sets up middleware, defines routes, and starts the server.

### Frontend

#### Components

- `AdmissionForm.js`: React component for the admission form.
- `PaymentForm.js`: React component for the payment form.

#### Entry Point

- `App.js`: The main entry point for the React frontend. Configures routes using React Router for the admission form and payment form.

### Running the Project

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies:
   - Backend: Navigate to the `backend` directory and run `npm install`
   - Frontend: Navigate to the `frontend` directory and run `npm install`
3. Set up the database: Ensure you have a MySQL server running and create a database with the specified credentials in the `.env` file.
4. Start the backend server: In the `backend` directory, run `npm start`
5. Start the frontend application: In the `frontend` directory, run `npm start`
6. Access the application in your browser at `http://localhost:3000`

### Usage

1. Open the application in your browser.
2. Fill out the admission form with the required information.
3. Submit the form to proceed to the payment form.
4. Fill out the payment form with card details and submit to complete the process.

### Dependencies

- Backend: Express, mysql2, dotenv
- Frontend: React, react-router-dom

### Additional Notes

- Ensure that the MySQL database is properly configured, and the required tables (`users` and `payments`) are set up.
- This project uses React Router for navigation between the admission and payment forms.

Feel free to explore the code and make any necessary adjustments based on your specific requirements. If you encounter any issues, refer to the error messages or consult the documentation of the respective libraries used.
