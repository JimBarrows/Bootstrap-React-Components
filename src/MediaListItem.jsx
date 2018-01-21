import PropTypes from 'prop-types'
import React from 'react'

export default class MediaListItem extends React.Component {

  render () {
    return (
      <li id={'MediaListItemComponent_' + this.props.id} className={'media'} >
        {this.props.children}
      </li >
    )
  }
}

MediaListItem.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.required
}

MediaListItem.defaultProps = {}