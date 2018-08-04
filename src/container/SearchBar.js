import React from 'react'
import { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from '../components/Book'
import PropTypes from 'prop-types'

export default class SearchBar extends Component {
  //state of the books searched, array of results
  state = {
    results : [],
  }

  handleSearch(e) {
    this.props.searchFor(e.target.value).then((results) => this.setState({results}));
  }

	render() {
    const { moveTo} = this.props;
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
                  onChange = {(e) => this.handleSearch(e)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {results.length > 0 && results.map((book, index) => (
                <Book
                  key={index}
                  book={book}
                  moveTo={moveTo}
                />
                ))}
              </ol>
            </div>
          </div>			
		)
	}
}


SearchBar.proptypes = {
  searchFor: PropTypes.func,
  moveTo: PropTypes.func,
}