import PropTypes from 'prop-types'
import React from 'react'

export default class MediaRight extends React.Component {

  render () {
    return (
      <div id={'MediaRightComponent_' + this.props.id}
        className={'media-right media-' + this.props.vertical_alignment} >
        {this.props.children}
      </div >
    )
  }
}

MediaRight.propTypes = {
  children: PropTypes.node.isRequired,
  vertical_alignment: PropTypes.oneOf(['top', 'middle', 'bottom']),
  id: PropTypes.string.isRequired
}

MediaRight.defaultProps = {
  vertical_alignment: 'top'
}
