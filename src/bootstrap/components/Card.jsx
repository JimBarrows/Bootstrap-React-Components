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
    context : PropTypes.oneOf(['danger', 'dark', 'info', 'light', 'primary', 'secondary', 'success', 'warning']),
    width   : PropTypes.string
  }

  render() {
    let {center, children, id, context, width} = this.props
    let attributes                             = {}
    let cssClass                               = 'card'
    if (width) {
      attributes['style']          = {}
      attributes['style']['width'] = width
    }
    if (center) {
      cssClass += ' text-center'
    }
    if ('danger' === context) {
      cssClass += ' text-white bg-danger'
    } else if ('dark' === context) {
      cssClass += ' text-white bg-dark'
    } else if ('info' === context) {
      cssClass += ' text-white bg-info'
    } else if ('light' === context) {
      cssClass += ' bg-light'
    } else if ('primary' === context) {
      cssClass += ' text-white bg-primary'
    } else if ('secondary' === context) {
      cssClass += ' text-white bg-secondary'
    } else if ('success' === context) {
      cssClass += ' text-white bg-success'
    } else if ('warning' === context) {
      cssClass += ' text-white bg-warning'
    }
    return (
      <div id={'Card-' + id} className={cssClass} {...attributes}>
        {children}
      </div>
    )
  }
}

