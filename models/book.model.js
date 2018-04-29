
var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var BookSchema = new mongoose.Schema({
    title: String,
    author: String,
    summary: String,
    date: Date,
    status: String
})

BookSchema.plugin(mongoosePaginate)
const Book = mongoose.model('Book', BookSchema)

module.exports = Book;