const express = require('express');
const dbConnect = require('./config/dbConnection');
const dotenv = require('dotenv');
const path = require('path');

const quotifyApp = express();
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post');

dotenv.config({path: path.resolve(__dirname,'./config/config.env')});

dbConnect;

quotifyApp.use(express.json());
//middleware route:
quotifyApp.use('/api/user', authRoutes);
quotifyApp.use('/api/post', postRoutes);
quotifyApp.use('/profile_image', express.static('profile_image'));

//const PORT = String(process.env.PORT || 3000);

const PORT = String(process.env.PORT || 3000);
quotifyApp.listen(PORT, () => console.log('Server is Up and Running !'));