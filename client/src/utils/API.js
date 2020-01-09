import axios from "axios"


export default {
    // this gets the book from the google search 
    getGoogleSearchBooks: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    //this gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },

    //this gets the book with the given id
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    //this saves a book to the database
    saveBook: function (savedBooks) {
        return axios.post("/api/books", savedBooks);
    },

    //this deletes the book with the given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }

}