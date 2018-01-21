import React from 'react'
import PropTypes from 'prop-types'

export default class MediaRight extends React.Component {

  render () {
    return (
      <div id={'MediaRightComponent_' + this.props.id} className={'media-right'} >
        {this.props.children}
      </div >
    )
  }
}

MediaRight.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}

MediaRight.defaultProps = {}