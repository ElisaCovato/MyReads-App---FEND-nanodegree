# MyReads App

This project has been created as part of the Udacity FEND nanodegree. The aim of the project was to create a bookshelf app that allows  to select and categorize books in three shelves: _read_,  _currently reading_, or _want to read_. The project is mainly based on the use of  React to build the application, and it is already provided with an API server and client library  to persist information awhile interacting with the application.



## How to install and run it 

1. Clone this **[repo](https://github.com/ElisaCovato/MyReads-App---FEND-nanodegree.git)**
2. Open the root folder of the repository in a terminal
3. Install all project dependencies with `npm install`
4. start the development server with `npm start`
5. Visit [http://localhost:8000](http://localhost:3000)

## Backend Server

The backend server is already provided. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods  to perform the necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.


## Important - search_terms
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend.

## Resources used:

- Create React App
    - [github repo](https://github.com/facebookincubator/create-react-app)
- Udacity Resources: 
    - [Project Starter Repo](https://github.com/udacity/reactnd-project-myreads-starter)
    - [Project Rubric](https://review.udacity.com/#!/rubrics/918/view)


## License
[MIT License](LICENSE.MIT)