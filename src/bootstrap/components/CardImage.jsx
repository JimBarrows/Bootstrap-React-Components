import PropTypes from 'prop-types'
import React from 'react'

export default class CardImage extends React.Component {

  static defaultProps = {}

  static propTypes = {
    id    : PropTypes.string.isRequired,
    height: PropTypes.number,
    place : PropTypes.oneOf(['bottom', 'top']),
    src   : PropTypes.string.isRequired,
    width : PropTypes.number
  }

  render() {
    let {id, height, place, src, width} = this.props
    let cssClasses                      = (place === 'top' ? 'card-image-top' : 'card-image-bottom')
    let attributes                      = {}
    if (height) {
      attributes['height'] = height
    }
    if (width) {
      attributes['width'] = width
    }
    return (
      <img id={'CardImage-' + id} className={cssClasses} src={src} {...attributes}/>
    )
  }
}

