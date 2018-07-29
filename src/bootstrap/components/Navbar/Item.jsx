import PropTypes from 'prop-types'
import React from 'react'

export default class NavbarItem extends React.Component {

  static defaultProps = {}

  static propTypes = {
    children: PropTypes.node.isRequired,
    id      : PropTypes.string.isRequired,
    onClick : PropTypes.func.isRequired
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
    let {children, id} = this.props
    let componentId = `NavbarItem-${id}`
    return (
      <li id={componentId} className='nav-item active'>
        <a id={`${componentId}-Link`}className='nav-link' href='#' onClick={this.onClick}>{children}</a>
      </li>
    )
  }
}
