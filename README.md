Project Structure
Backend
The backend is structured into key components:

Controller:

formController.js: Manages the logic for handling student admissions and payment transactions. It interacts with the database to store user data.
Middleware:

validationMiddleware.js: Provides middleware to validate user data during form submissions. This ensures that the data submitted is accurate and meets the required criteria.
Utils:

db.js: Establishes a connection to the MySQL database. It uses the mysql2 library to handle database operations.
Root:

index.js: The main entry point for the Node.js server. It sets up API endpoints and starts the server.
Frontend
The frontend is organized as follows:

Source:
components: Contains React components for the admission and payment forms. These components are responsible for rendering UI elements and handling user interactions.
App.js: The main application component handling routing. It uses React Router to navigate between different views.
Backend
Database Connection
The backend connects to a MySQL database using the mysql2 library. The connection details, such as the host, user, password, and database name, are stored securely in a .env file.

Controllers
formController.js
This controller manages the logic for processing admission form submissions and payment transactions. It uses the mysql2 library to interact with the MySQL database, inserting relevant data.

Middleware
validationMiddleware.js
Middleware for validating user data during form submissions. This ensures that the data submitted adheres to specified criteria. For instance, it may check the age to ensure it falls within an acceptable range.

API Endpoints
The backend defines two API endpoints:

POST /submit-form: Handles admission form submissions. This endpoint is responsible for validating the data and storing it in the database.

POST /PaymentGateway: Manages payment form submissions. It validates the payment details and records the transaction in the database.

Frontend
Components
AdmissionForm.js
This component renders the student admission form, allowing users to input their information. It captures user input and sends it to the backend for processing.

PaymentForm.js
Responsible for rendering the payment form and facilitating payment transactions. It captures payment details, validates them, and communicates with the backend to record the transaction.

Routing
Routing is managed in App.js using React Router. It ensures that the appropriate component is displayed based on the current route, allowing seamless navigation between the admission and payment forms.

