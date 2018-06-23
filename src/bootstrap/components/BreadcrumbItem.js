import PropTypes from 'prop-types'
import React from 'react'

export default class BreadcrumbItem extends React.Component {
  static defaultProps = {
    active: false,
    page  : false
  }

  static propTypes = {
    active  : PropTypes.boolean,
    children: PropTypes.node,
    id      : PropTypes.string.isRequired,
    page    : PropTypes.boolean
  }

  render() {
    const {
            active,
            children,
            id,
            page
          } = this.props

    let attributes = {}
    if (page) {
      attributes['aria-current'] = 'page'
    }
    return <li className={'breadcrumb-item' + (active ? ' active' : '')} {...attributes}>
      {children}
    </li>
  }
}