import PropTypes from 'prop-types'
import React from 'react'

export default class PanelHeader extends React.Component {
  render () {
    let {id} = this.props
    return (
      <div id={id + 'PanelHeader'} className='panel-heading clearfix' >
        {this.props.children}
      </div >
    )
  }
}

PanelHeader.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}
