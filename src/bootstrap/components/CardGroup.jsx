import PropTypes from 'prop-types'
import React from 'react'

export default class CardGroup extends React.Component {

  static defaultProps = {}

  static propTypes = {
    children: PropTypes.node.isRequired,
    id      : PropTypes.string.isRequired
  }

  render() {
    let {children, id} = this.props
    return (
      <div id={'CardGroup-' + id} className={'card-group'}>
        {children}
      </div>
    )
  }
}

