import PropTypes from 'prop-types'
import React from 'react'

export default class CardHeader extends React.Component {

  static defaultProps = {}

  static propTypes = {
    id      : PropTypes.string.isRequired,
    children: PropTypes.node,
    text    : PropTypes.string
  }

  render() {
    let {children, id, text} = this.props
    return (
      <div id={'CardHeader-' + id} className={'card-header'}>
        {text ? text : children}
      </div>
    )
  }
}

