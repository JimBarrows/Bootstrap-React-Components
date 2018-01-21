import PropTypes from 'prop-types'
import React from 'react'
import MediaHeading from './MediaHeading'

export default class MediaBody extends React.Component {

  render () {
    return (
      <div id={'MediaBodyComponent_' + this.props.id} className={'media-body'} >
        {this.props.heading ?
          <MediaHeading heading={this.props.heading} id={'MediaBodyComponent_' + this.props.id} /> : ''}
        {this.props.children}
      </div >
    )
  }
}

MediaBody.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string,
  id: PropTypes.string.isRequired
}

MediaBody.defaultProps = {}