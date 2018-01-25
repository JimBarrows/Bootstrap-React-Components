import PropTypes from 'prop-types'
import React from 'react'

export default class Panel extends React.Component {
  render () {
    let {context, id} = this.props
    return (
      <div id={'Panel_' + id} className={`panel panel-${context}`} >
        {this.props.children}
      </div >
    )
  }
}

Panel.defaultProps = {
  context: 'default'
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
  context: PropTypes.oneOf(['primary', 'success', 'info', 'warn', 'danger', 'default']),
  id: PropTypes.string.isRequired
}
