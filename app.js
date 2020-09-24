const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const router = express.Router();
const cors = require('cors');
const expressValidator = require('express-validator');
require('dotenv').config();

// Import routes
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const orderRoutes = require('./routes/order');
const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
const braintreeRoutes = require('./routes/braintree');


// app - express
const app = express();


// modern connection db
mongoose
const db = async() => {
    try {
        const success = await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log('DB connected!');
    } catch (error) {
        console.log('DB connection Error', error);
    };
}

// execute db connection
db();

// Middleware
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// Routes middlewares
app.use('/api', authRoutes);
app.use('/api', categoryRoutes);
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', braintreeRoutes);
app.use('/api', orderRoutes);


// Port
const port = process.env.PORT || 8000;

// Listen port
app.listen(port, () => {
    console.log(`Server ..... running on port ${port}`);
});