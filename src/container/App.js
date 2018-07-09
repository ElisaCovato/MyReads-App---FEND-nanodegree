import React from 'react'
import { Route } from 'react-router-dom'
import BookShelfMain from './BookShelfMain'
import SearchBar from './SearchBar'
// import * as BooksAPI from './BooksAPI'
import '../styles/App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <BookShelfMain />
          )} />
        <Route path = '/search' render={()=> (
            <SearchBar />
          )}/>
      </div>
    )
  }
}

export default BooksApp
