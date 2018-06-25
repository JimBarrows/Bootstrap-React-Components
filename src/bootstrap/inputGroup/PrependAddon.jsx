import PropTypes from 'prop-types'
import React from 'react'

export default class PrependAddon extends React.Component {

  static defaultProps = {}

  static propTypes = {
    id  : PropTypes.string.isRequired,
    text: PropTypes.node.isRequired
  }

  render() {
    let {id, text} = this.props
    return (
      <div id={'PrependComponent-' + id} className='input-group-prepend'>
        <span className='input-group-text'>{text}</span>
      </div>
    )
  }
}

