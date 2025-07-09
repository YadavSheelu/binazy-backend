const express = require("express")
const catchAsyncErrors = require('./middleware/catchAsyncErrors');
const ErrorHander = require('./utils/errorhander');
const app = express();

const cookieParser = require('cookie-parser')
const bodyParser = require("body-parser")


const errorMiddleware = require("./middleware/error")


app.use(express.json()); 
app.use(cookieParser());   

app.use(express.json())

// Route Imports
const admin = require("./routes/adminRoutes")
const project = require("./routes/projectRoutes")
const service = require("./routes/serviceRoutes")
const skill = require("./routes/skillsRoutes")
const user = require("./routes/userRoutes")


app.use("/api/v1",admin);
app.use("/api/v1",project);
app.use("/api/v1",service);
app.use("/api/v1",skill);
app.use("/api/v1",user);



app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}))

app.use( errorMiddleware );


module.exports = app