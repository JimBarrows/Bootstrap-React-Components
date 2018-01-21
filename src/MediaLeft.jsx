import PropTypes from 'prop-types'
import React from 'react'

export default class MediaLeft extends React.Component {

  render () {
    return (
      <div id={'MediaLeftComponent_' + this.props.id} className={'media-right media-' + this.props.vertical_alignment} >
        {this.props.children}
      </div >
    )
  }
}

MediaLeft.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  vertical_alignment: PropTypes.oneOf(['top', 'middle', 'bottom'])
}

MediaLeft.defaultProps = {
  vertical_alignment: 'top'
}
