const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/TodoRoutes');
// require('dotenv').config();
const app = express();
app.use(express.json());
app.use(cors());

mongoose
.connect('mongodb+srv://peerhammad2022:i0G5HlXeOplDfZpy@cluster0.2a4cwyw.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('Connected to mongodb...'))
.catch((error) => console.log(error));

app.use(routes);

app.listen(4000, () => {
    console.log('Listening on port 4000');
});

//i0G5HlXeOplDfZpy
//mongodb+srv://peerhammad2022:i0G5HlXeOplDfZpy@cluster0.2a4cwyw.mongodb.net/?retryWrites=true&w=majority