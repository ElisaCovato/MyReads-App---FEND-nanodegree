import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

/** 
This file can be used to test the application
**/

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
})


