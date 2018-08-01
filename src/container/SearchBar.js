import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from '../components/Book'
import * as BooksAPI from '../BooksAPI'

export default class SearchBar extends Component {
  //state of the books searched, array of results
  state = {
    results : [],
  }

  //this function handles the search
  searchFor = (e) => {
    const query = e.target.value.trim();
    if (query) {
      BooksAPI.search(query).then((results) => {
        if (results.length > 0) {
          this.setState({
            results: results.filter(book => book.imageLinks)
          });
        }
      });
    }
  }

  searchMove = (e, book) => {
    const shelf = e.target.value;
    BooksAPI.update(book, shelf).then(() => {
      //update the books searched with the function above
      this.props.history.push('/');
    });
  }

	render() {
    const  {results} = this.state;
		return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/" />
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input 
                  type="text" 
                  placeholder="Search by title or author" 
                  onChange = {this.searchFor}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {results.length > 0 && results.map((book, index) => (
                <Book
                  key={index}
                  authors={book.authors}
                  thumbnail={book.imageLinks.thumbnail}
                  title={book.title}
                  shelf="none"
                  moveTo={e => this.searchMove(e, book)}
                />
                ))}
              </ol>
            </div>
          </div>			
		)
	}
}