import PropTypes from 'prop-types'
import React from 'react'
import PaginationItem from './PaginationItem'

export default class Pagination extends React.Component {

  static defaultProps = {
    alignment: 'left',
    size     : 'medium'
  }

  static propTypes = {
    alignment : PropTypes.oneOf(['left', 'center', 'right']),
    children  : PropTypes.node.isRequired,
    id        : PropTypes.string.isRequired,
    onNext    : PropTypes.func.isRequired,
    onPrevious: PropTypes.func.isRequired,
    size      : PropTypes.oneOf(['small', 'medium', 'large'])
  }

  constructor(props) {
    super(props)
    this.onNext     = this.onNext.bind(this)
    this.onPrevious = this.onPrevious.bind(this)
  }

  onNext(e) {
    e.preventDefault()
    this.props.onNext()
  }

  onPrevious(e) {
    e.preventDefault()
    this.props.onPrevious()
  }

  render() {
    let {alignment, id, size} = this.props
    let className             = 'pagination'
    switch (size) {
      case 'small':
        className += ' pagination-sm'
        break
      case 'large':
        className += ' pagination-lg'
        break
    }
    switch (alignment) {
      case 'center':
        className += ' justify-content-center'
        break
      case 'right':
        className += ' justify-content-end'
        break
    }
    return (
      <nav id={'pagination-' + id} aria-label={' Page navigation ' + id}>
        <ul className={className}>
          <PaginationItem id={'pagination-next-' + id} onClick={this.onPrevious}>
            &laquo;
          </PaginationItem>
          {this.props.children}
          <PaginationItem id={'pagination-next-' + id} onClick={this.onNext}>
            &raquo;
          </PaginationItem>
        </ul>
      </nav>
    )
  }
}


