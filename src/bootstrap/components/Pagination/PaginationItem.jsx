import PropTypes from 'prop-types'
import React from 'react'

export default class PaginationItem extends React.Component {

  static defaultProps = {}

  static propTypes = {
    children: PropTypes.node.isRequired,
    id      : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired,
    state   : PropTypes.oneOf(['active', 'disabled'])
  }

  constructor(props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick(e) {
    e.preventDefault()
    this.props.onClick(e)
  }

  render() {
    let {children, id, state} = this.props
    let className             = 'page-item'
    switch (state) {
      case 'active':
        className += ' active'
        break
      case 'disabled':
        className += ' disabled'
        break
    }
    return (
      <li id={'PaginationItem-' + id} className={className}>
        <a className={'page-link'} onClick={this.onClick}>
          {children}
        </a>
      </li>
    )
  }
}

