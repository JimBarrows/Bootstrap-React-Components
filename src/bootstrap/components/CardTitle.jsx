import PropTypes from 'prop-types'
import React from 'react'

export default class CardTitle extends React.Component {

  static defaultProps = {}

  static propTypes = {
    id   : PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  render() {
    let {id, title} = this.props
    return (
      <h5 id={'CardTitle-' + id} className={'card-title'}>
        {title}
      </h5>
    )
  }
}

