import PropTypes from 'prop-types'
import React from 'react'

export default class ButtonGroup extends React.Component {
  render () {
    let {id} = this.props
    return (
      <div id={id + 'ButtonGroup'} className='btn-group' role='group' aria-label='...' >
        {this.props.children}
      </div >
    )
  }
}

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}
