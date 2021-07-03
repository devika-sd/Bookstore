const express=require('express');
const app= express();
const cors=require('cors');
require('colors');
const errorHandler=require('./Admin-part1/middleware/errorhandler');
const databaseConnection=require('./db');
/**********************************Route Import Area******************************************/

//team3
const userRoute = require('./Admin-part1/routes/users');
const orderRoute = require('./Admin-part1/routes/orders');
//team5
const bookRoute = require('./Admin-part2/routes/book');

/***********************************************************************************************/

require('dotenv').config();


app.use(cors());

app.use(express.json());


//for User app (running frontend and backend in same port) use: http://localhost:8080/user
// app.use("/", express.static('public/User'));
// app.use('/User', express.static('public/User'))


//for Admin app (running frontend and backend in same port) use: http://localhost:8080/admin
app.use("/", express.static('public/Admin'));
app.use('/Admin', express.static('public/Admin/'))


databaseConnection();
/**********************************Route Area**************************************************/

//team 3
app.use("/api/v1/users",userRoute);
app.use("/api/v1/orders",orderRoute);
//team 5
app.use("/api/v1/book", bookRoute);
/***********************************************************************************************/



/**********************************Error Handler Area*******************************************/

//common error handler
app.use(errorHandler);

/***********************************************************************************************/

app.listen(process.env.PORT,()=>{
    console.log("listening to the port 8080");
})