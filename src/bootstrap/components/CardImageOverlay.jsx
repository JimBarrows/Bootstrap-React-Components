import PropTypes from 'prop-types'
import React from 'react'

export default class CardImageOverlay extends React.Component {

  static defaultProps = {}

  static propTypes = {
    children: PropTypes.node.isRequired,
    id      : PropTypes.string.isRequired
  }

  render() {
    let {children, id} = this.props
    return (
      <div id={'CardImageOverlay-' + id} className={'card-img-overlay'}>
        {children}
      </div>
    )
  }
}

