import PropTypes from 'prop-types'
import React from 'react'

export default class Pagination extends React.Component {
  constructor (props) {
    super(props)
    this.onNext = this.onNext.bind(this)
    this.onPrevious = this.onPrevious.bind(this)
  }

  onNext (e) {
    e.preventDefault()
    this.props.onNext()
  }

  onPrevious (e) {
    e.preventDefault()
    this.props.onPrevious()
  }

  render () {
    let {id} = this.props
    return (

      <nav id={id + 'pagination'} aria-label={id + ' Page navigation'} >
        <ul className='pagination' >
          <li >
            <a onClick={this.onPrevious} aria-label='Previous' >
              <span aria-hidden='true' >&laquo;</span >
            </a >
          </li >
          {this.props.children}
          <li >
            <a onClick={this.onNext} aria-label='Next' >
              <span aria-hidden='true' >&raquo;</span >
            </a >
          </li >
        </ul >
      </nav >
    )
  }
}

Pagination.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  onNext: PropTypes.func.isRequired,
  onPrevious: PropTypes.func.isRequired
}
