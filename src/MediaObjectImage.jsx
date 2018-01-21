import React from 'react'
import PropTypes from 'prop-types'

export default class MediaObjectImage extends React.Component {

  render () {
    return (
      <img id={'MediaObjectImageComponent_' + this.props.id} className={'media-object'} src={this.props.src}
        alt={this.props.alt} height={this.props.height} width={this.props.width} />
    )
  }
}

MediaObjectImage.propTypes = {
  alt: PropTypes.string.isRequired,
  height: PropTypes.number,
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number
}

MediaObjectImage.defaultProps = {
  height: 64,
  width: 64
}