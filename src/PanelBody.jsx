import PropTypes from 'prop-types'
import React from 'react'

export default class PanelBody extends React.Component {

  render () {
    let {id} = this.props
    return (
      <div id={id + 'PanelBody'} className='panel-body' >
        {this.props.children}
      </div >
    )
  }
}

PanelBody.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}
