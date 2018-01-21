import React from 'react'
import PropTypes from 'prop-types'

export default class MediaLeft extends React.Component {

  render () {
    return (
      <div id={'MediaLeftComponent_' + this.props.id} className={'media-left'} >
        {this.props.children}
      </div >
    )
  }
}

MediaLeft.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}

MediaLeft.defaultProps = {}