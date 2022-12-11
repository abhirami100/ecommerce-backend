const mongoose = require('mongoose')

// to connect to database
mongoose.connect('mongodb://localhost:27017/ecommerce',()=>{
    console.log('MongoDb Connected Successfully...');
})

//create model to store all product
const Item =mongoose.model('Item',{
    id:Number,
    title:String,
    price:Number,
    description:String,
    discountPercentage:Number,
    category:String,
    images:String,
    rating:Number,
    stock:Number,
    reviews:{
        name:String,
        date:Number,
        rating:Number,
        comments:String
    }
   

})
// for using model export 
module.exports={
    Item
}