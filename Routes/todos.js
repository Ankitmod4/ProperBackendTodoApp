const express = require('express');
const router = express.Router();

// Import Controller
const { CreateTodo } = require('../controllers/CreateTodo');
const { GetTodo } = require('../controllers/GetTodo');
const { PutTodo } = require('../controllers/PutTodo');
const { DeleteTodo } = require('../controllers/DeleteTodo');

// Define Api routes 
router.post('/createtodo', CreateTodo);
router.get('/Gettodo',GetTodo);  
router.put('/Puttodo/:id', PutTodo); 
router.delete('/Deletetodo/:id', DeleteTodo); 

 
module.exports = router;