const express = require('express');
const app = express();
require('dotenv').config();
const port = 3000;
const TODO = require('./Routes/todos');
  
app.use(express.json()); 
app.use('/api/v1', TODO);  
 

app.listen(port, () => { 
    console.log(`Server is Starting on port ${port}`);

}) 
app.get('/', (req,res) => {
    res.send(`<h1>This is the Home Page </h1>`);

})
const DbConnect = require('./config/DbConnent');
DbConnect();