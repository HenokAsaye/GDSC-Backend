import mongoose from "mongoose";


mongoose.connect("mongodb://localhost:27017/libraryDb")
mongoose.connection.on("connected",()=>[
    console.log("Mongoose is connected Successfully!")
])
mongoose.connection.on('error',(err)=>{
    console.log("Error has occured",err)
});


const bookSchema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true
    },
    yearPublished:{
        type:Number,
        required:true,

    },
    genres:{
        type:[string],
    },
    availableCopies:{
        type:Number,
        default:5

    }
})

const Book = mongoose.model("book",bookSchema)

module.exports = Book;



