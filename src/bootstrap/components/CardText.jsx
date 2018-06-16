import PropTypes from 'prop-types'
import React from 'react'

export default class CardText extends React.Component {

  static defaultProps = {}

  static propTypes = {
    id  : PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }

  render() {
    let {id, text} = this.props
    return (
      <p id={'CardText-' + id} className={'card-text'}>
        {text}
      </p>
    )
  }
}

