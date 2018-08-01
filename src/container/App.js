import React from 'react'
import { Route } from 'react-router-dom'
import BookShelfMain from './BookShelfMain'
import SearchBar from './SearchBar'
import * as BooksAPI from '../BooksAPI'
import '../styles/App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route path="/search" component={SearchBar} />
        <Route exact path="/" component={BookShelfMain} />
      </div>
    )
  }
}

export default BooksApp
