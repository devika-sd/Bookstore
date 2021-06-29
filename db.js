const mongoose = require('mongoose');

// 4. Create connection
async function databaseConnection()
{
    let connection = await mongoose.connect(`mongodb+srv://bookstore:Bookstore@123@cluster0.xxifn.mongodb.net/Bookstore?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
    });
  console.log("connected to database")
}

module.exports = databaseConnection;