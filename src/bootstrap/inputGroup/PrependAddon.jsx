import PropTypes from 'prop-types'
import React from 'react'

export default class PrependAddon extends React.Component {

  static defaultProps = {}

  static propTypes = {
    id      : PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  }

  render() {
    let {id, children} = this.props
    return (
      <div id={'PrependComponent-' + id} className='input-group-prepend'>
        <span className='input-group-text'>{children}</span>
      </div>
    )
  }
}

