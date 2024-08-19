import {Book} from "./librarySchema"
async function addNewBook(data){
    try{
        const newBook = new Book(data)
        const saveData = await newBook.save() 
        console.log("newBook",saveData)
    }catch(err){
        console.log(err)
    }
}
async function updateavailablecopies(title,newCopies){
    try{
        const newCopy = await Book.findOneAndUpdate(
            {title},
            {availableCopies:newCopies},
            {new:true}
        )
        console.log(`The Available Copies of ${title}is Updated to`,newCopies)
    }catch(err){
        console.log(err)
    }

}
async function findByAuthor(authorName){
    try{
        const authorBook = await Book.find({author:authorName})
        console.log("Books By",authorName,":",authorBook)
    }catch(err){
        console.log(err)
    }

}
async function deleteByTitle(title){
    try{
        const bookName = await Book.findOneAndDelete({title})
        console.log("Book with title",title,"is deleted sucessfully!")
    }catch(err){
        console.log(err)
    }
}
