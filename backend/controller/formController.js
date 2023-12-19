const db = require('../utils/db'); 
const submitForm = async (req, res) => {
    
    try {
        const { name, age, batch, email } = req.body;
        const [result] = await db.execute(
          'INSERT INTO users (name, age, batch, email, createdAt, updatedAt) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)',
          [name, age, batch, email]
        );
        res.status(200).json({status :'Admission successfull'});
      } catch (error) {
        res.status(500).json({ status: `Internal Server Error :${error}` });
      }    
  };

  const completePayment = async (req , res) => {
    try {
        const { email , amount } = req.body;
        const txid = ""; 
        const [result] = await db.execute(
          'INSERT INTO payments (email, amount , txid , createdAt, updatedAt) VALUES (?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)',
          [email , amount , txid]
        );
        res.status(200).json({status : `Payment successfull Your transaction id is ${result.insertId}` });
      } catch (error) {
        res.status(500).json({ status: `Internal Server Error :${error}` });
      }    
    return { success: true, message: 'Payment successful.' };
  };
  
  module.exports = { submitForm, completePayment };
  