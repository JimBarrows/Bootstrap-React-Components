import PropTypes from 'prop-types'
import React from 'react'

export default class CardTabs extends React.Component {

  static defaultProps = {}

  static propTypes = {
    children: PropTypes.node.isRequired,
    id      : PropTypes.string.isRequired
  }

  render() {
    let {children, id} = this.props
    return (
      <ul id={'CardTabs-' + id} className={'nav nav-tabs card-header-tabs'}>
        {children}
      </ul>
    )
  }
}

