import PropTypes from 'prop-types'
import React from 'react'

export default class MediaList extends React.Component {

  render () {
    return (
      <ul id={'MediaListComponent_' + this.props.id} className={'media-list'} >
        {this.props.children}
      </ul >
    )
  }
}

MediaList.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.required
}

MediaList.defaultProps = {}