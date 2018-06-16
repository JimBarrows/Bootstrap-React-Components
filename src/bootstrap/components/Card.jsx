import PropTypes from 'prop-types'
import React from 'react'

export default class Card extends React.Component {

  static defaultProps = {
    center: false,
    width : ''
  }

  static propTypes = {
    center  : PropTypes.bool,
    children: PropTypes.node.isRequired,
    id      : PropTypes.string.isRequired,
    type    : PropTypes.oneOf(['danger', 'dark', 'info', 'light', 'primary', 'secondary', 'success', 'warning']),
    width   : PropTypes.string
  }

  render() {
    let {center, children, id, type, width} = this.props
    let attributes                          = {}
    let cssClass                            = 'card'
    if (width) {
      attributes['style']          = {}
      attributes['style']['width'] = width
    }
    if (center) {
      cssClass += ' text-center'
    }
    if ('danger' === type) {
      cssClass += ' text-white bg-danger'
    } else if ('dark' === type) {
      cssClass += ' text-white bg-dark'
    } else if ('info' === type) {
      cssClass += ' text-white bg-info'
    } else if ('light' === type) {
      cssClass += ' bg-light'
    } else if ('primary' === type) {
      cssClass += ' text-white bg-primary'
    } else if ('secondary' === type) {
      cssClass += ' text-white bg-secondary'
    } else if ('success' === type) {
      cssClass += ' text-white bg-success'
    } else if ('warning' === type) {
      cssClass += ' text-white bg-warning'
    }
    return (
      <div id={'Card-' + id} className={cssClass} {...attributes}>
        {children}
      </div>
    )
  }
}

