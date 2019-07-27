import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const Hello = props => (
  <div>Hello {props.name}!</div>
)

Hello.defaultProps = {
  name: 'Kalpesh'
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="World" />,
    document.getElementById('root')
  )
})
