import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'


function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>Current time is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  )
}

setInterval(tick, 1000);


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
  )
})
