const express = require('express');
const app = express();
const port = 5000;

//Middleware
app.get('/user', (req, res) => {
    res.send('User found')
})
app.listen(port, () => console.log(`Server is running on port ${port}`))