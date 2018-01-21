import PropTypes from 'prop-types'
import React from 'react'

export default class MediaHeading extends React.Component {

  render () {
    return (
      <h4 id={'MediaHeadingComponent_' + this.props.id} className={'media-heading'} >
        {this.props.heading}
      </h4 >
    )
  }
}

MediaHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
}

MediaHeading.defaultProps = {}