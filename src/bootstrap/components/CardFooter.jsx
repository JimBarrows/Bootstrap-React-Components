import PropTypes from 'prop-types'
import React from 'react'

export default class CardFooter extends React.Component {

  static defaultProps = {}

  static propTypes = {
    children: PropTypes.node.isRequired,
    id      : PropTypes.string.isRequired,
  }

  render() {
    let {children, id} = this.props
    return (
      <div id={'CardFooter-' + id} className={'card-footer'}>
        {children}
      </div>
    )
  }
}

