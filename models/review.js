const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema(
   {
     
     rating: { type: Number, required: true },
     comment: { type: String, required: true },
     reviewDate : {type : Date, Default : Date.now},
     user: {
         type: mongoose.Schema.Types.ObjectId,
          required: true,
         ref: 'user',
      },
      book: {
         type : mongoose.Schema.Types.ObjectId,
          ref : 'book',
          required: true,
       },
    },
   {
     timestamps: true,
   }
 )

 const Reviews = mongoose.model('Review', reviewSchema);

 module.exports = Reviews