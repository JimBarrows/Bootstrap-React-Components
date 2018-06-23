import PropTypes from 'prop-types'
import React from 'react'

export default class TableHead extends React.Component {

  static defaultProps = {}

  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    invert  : PropTypes.bool
  }

  render() {
    let {children, id, invert} = this.props
    let className = ''
    if( invert) {
      className += ' thead-dark'
    }
    return (
      <thead id={'TableHead-' + id} className={className}>
        {children}
      </thead>
    )
  }
}

