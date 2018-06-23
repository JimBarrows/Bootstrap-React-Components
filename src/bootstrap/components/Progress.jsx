import PropTypes from 'prop-types'
import React from 'react'

export default class Progress extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    height  : PropTypes.number,
    id: PropTypes.string.isRequired
  }

  static defaultProps = {}

  render () {
    let {children, height, id} = this.props

    let currentStyle = {}

    if( height) {
      currentStyle['height'] = height +'px'
    }
    return (
      <div id={'Progress-' + id} className='progress' style={currentStyle}>
        {children}
      </div >
    )
  }
}

