import PropTypes from 'prop-types'
import React from 'react'

export default class CardFooter extends React.Component {

  static defaultProps = {}

  static propTypes = {
    id  : PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }

  render() {
    let {id, text} = this.props
    return (
      <div id={'CardFooter-' + id} className={'card-footer'}>
        {text}
      </div>
    )
  }
}

