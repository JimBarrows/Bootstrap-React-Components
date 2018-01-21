import React from 'react'
import PropTypes from 'prop-types'

export default class MediaBody extends React.Component {

  render () {
    return (
      <div id={'MediaBodyComponent_' + this.props.id} className={'media-body'} >
        {this.props.children}
      </div >
    )
  }
}

MediaBody.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}

MediaBody.defaultProps = {}