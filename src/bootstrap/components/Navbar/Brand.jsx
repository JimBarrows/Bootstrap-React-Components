import PropTypes from 'prop-types'
import React from 'react'

export default class Brand extends React.Component {

  static defaultProps = {}

  static propTypes = {
    children: PropTypes.node,
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
    return (
      <span><a id={'Navbar-brand-' + id} className="navbar-brand" href="#" onClick={this.onClick}>{children}</a><button
        className="navbar-toggler" type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"><span
        className="navbar-toggler-icon"></span></button></span>
    )
  }
}

