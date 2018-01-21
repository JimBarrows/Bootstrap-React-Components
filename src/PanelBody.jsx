import PropTypes from 'prop-types'
import React from 'react'

export default class PanelBody extends React.Component {
  render () {
    return (
      <div id={'PanelBody_' + this.props.id} className='panel-body' >
        {this.props.children}
      </div >
    )
  }
}

PanelBody.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}
