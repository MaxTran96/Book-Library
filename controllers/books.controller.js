var BookService = require('../services/books.service')

_this = this


exports.getBooks = async function(req, res, next){

    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    console.log(page, limit)

    try{
        var books = await BookService.getBooks({}, page, limit)
        return res.status(200).json({status: 200, data: books, message: "Succesfully Recieved Books"});
    }catch(e){
        return res.status(400).json({status: 400, message: e.message});
    }
};

exports.addBookToRead = async function(req, res, next){
    var book = {
        title: req.body.title,
        author: req.body.author,
        summary: req.body.summary,
        status: req.body.status
    }

    try{
        var addedBook = await BookService.addBookToRead(book)
        return res.status(201).json({status: 201, data: addedBook, message: "Succesfully Added Book"})
    }catch(e){
        return res.status(400).json({status: 400, message: "Adding Book was Unsuccesfull"})
    }
};

exports.updateBook= async function(req, res, next){

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    console.log(req.body)

    var book = {
        id,
        title: req.body.title ? req.body.title : null,
        author: req.body.author ? req.body.author : null,
        summary: req.body.summary ? req.body.summary : null,
        status: req.body.status ? req.body.status : null
    }

    try{
        var updatedBook = await BookService.updateBook(book)
        return res.status(200).json({status: 200, data: updatedBook, message: "Succesfully Updated Book"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
};

exports.removeBook = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await BookService.removeBook(id)
        return res.status(204).json({status:204, message: "Succesfully Deleted Book"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

};
