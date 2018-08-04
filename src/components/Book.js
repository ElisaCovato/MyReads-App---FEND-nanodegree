import React from 'react'
import PropTypes from 'prop-types'

const Book = ({book, authors, thumbnail, title, shelf, moveTo}) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div className="book-cover" 
        	style={{ 
        		width: 128, 
        		height: 193, 
        		backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})` : null 
        	}} >
        </div>
          <div className="book-shelf-changer">
            <select value={book.shelf} onChange={ (e) => moveTo(e.target.value, book)}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
        	{book.authors ? book.authors.join(', '): 'Unknown Author'}
        </div>
      </div>  
  </li> 
)

Book.proptypes = {
	authors: PropTypes.array,
	thumbnail: PropTypes.string,
	title: PropTypes.string,
  shelf: PropTypes.string,
  moveTo: PropTypes.func,
}

export default Book;