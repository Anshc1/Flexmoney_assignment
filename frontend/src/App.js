// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdmissionForm from './components/AdmissionForm';
import PaymentForm from './components/PaymentForm';
function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/admissionform" element={<AdmissionForm/>} />
        <Route path="/paymentform" element={<PaymentForm/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
