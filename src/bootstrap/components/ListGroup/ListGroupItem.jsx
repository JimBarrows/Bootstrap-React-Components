import PropTypes from 'prop-types'
import React from 'react'

export default class ListGroupItem extends React.Component {

  static defaultProps = {
    active: false
  }

  static propTypes = {
    active  : PropTypes.bool,
    children: PropTypes.node.isRequired,
    id      : PropTypes.string.isRequired
  }

  render() {
    let {active, children, id} = this.props
    let className              = 'list-group-item'
    if (active) {
      className += ' active'
    }
    let componentId = `ListGroupItem-${id}`
    return (
      <li id={`${componentId}-${id}`} className={className}>{children}</li>
    )
  }
}
