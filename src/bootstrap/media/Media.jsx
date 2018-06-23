import PropTypes from 'prop-types'
import React from 'react'

export default class Media extends React.Component {

  render () {
    return (
      <div id={'MediaComponent_' + this.props.id} className={'media'}>
        {this.props.children}
      </div >
    )
  }
}

Media.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}

Media.defaultProps = {}