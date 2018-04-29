var Book = require('../models/book.model')

_this = this


exports.getBooks = async function(query, page, limit){
    var options = {
        page,
        limit
    }
    try {
        var books = await Book.paginate(query, options)
        return books;
    } catch (e) {
        throw Error('Error while Paginating Books')
    }
};

exports.addBookToRead = async function(book){

    var newBook = new Book({
        title: book.title,
        author: book.author,
        summary: book.summary,
        date: new Date(),
        status: book.status
    })
    try{
        var savedBook = await newBook.save()
        return savedBook;
    }catch(e){
        throw Error("Error while adding Book")
    }
};

exports.updateBook = async function(book){
    var id = book.id

    try{
        var oldBook = await Book.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Book")
    }

    if(!oldBook){
        return false;
    }

    console.log(oldBook)

    oldBook.title = book.title
    oldBook.description = book.description
    oldBook.status = book.status


    console.log(oldBook)
    try{
        var savedBook = await oldBook.save()
        return savedBook;
    }catch(e){
        throw Error("And Error occured while updating the Book");
    }
};

exports.removeBook = async function(id){
    
    try{
        var deleted = await Book.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Book Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Book")
    }
};