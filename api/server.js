const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors')
const dotenv = require('dotenv');
const routeUrl = require('./routes/routes');
const port = 5000;

dotenv.config();
mongoose.connect(process.env.DATABASE_ACCESS, ()=> console.log('Database is connected'))

//Middleware
app.use(express.json()) //bodyParser
app.use(cors());
app.use('/api', routeUrl)

app.listen(port, () => console.log(`Server is running on port ${port}`))