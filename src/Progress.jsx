import PropTypes from 'prop-types'
import React from 'react'

export default class Progress extends React.Component {

  render () {
    return (
      <div id={'ProgressComponent_' + this.props.id} className='progress' >
        {this.props.children}
      </div >
    )
  }
}

Progress.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}

Progress.defaultProps = {}