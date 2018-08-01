import React from 'react'
import PropTypes from 'prop-types'

const Book = ({authors, thumbnail, title, shelf, moveTo}) => (
          <li>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" 
                            	style={{ 
                            		width: 128, 
                            		height: 193, 
                            		backgroundImage: `url(${thumbnail})` 
                            	}} >
                            </div>
                            <div className="book-shelf-changer">
                              <select value={shelf} onChange={moveTo}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{title}</div>
                          <div className="book-authors">
                          	{authors ? authors.join(', '): 'Unknown Author'}
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