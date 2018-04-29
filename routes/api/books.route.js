var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created

var BookController = require('../../controllers/books.controller');


// var mongojs = require('mongojs');
// var db = mongojs('mongodb://maxtran:maxtran@ds161529.mlab.com:61529/maxtran');
// console.log(db);
// router.get('/books', function(req, res, next){
//     db.bookLibrary.find(function(err, books){
//         if(err){
//            res.send(err); 
//         } else {
//            res.json(books);
//         }
//     });
// });
// Map each API to the Controller FUnctions

router.get('/', BookController.getBooks)

router.post('/', BookController.addBookToRead)

router.put('/', BookController.updateBook)

router.delete('/:id',BookController.removeBook)
// Export the Router

module.exports = router;