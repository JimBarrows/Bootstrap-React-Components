import PropTypes from 'prop-types'
import React from 'react'

export default class AppendAddon extends React.Component {

  static defaultProps = {}

  static propTypes = {
    id  : PropTypes.string.isRequired,
    text: PropTypes.node.isRequired
  }

  render() {
    let {id, text} = this.props
    return (
      <div id={'AppendComponent-' + id} className='input-group-append'>
        <span className='input-group-text'>{text}</span>
      </div>
    )
  }
}

