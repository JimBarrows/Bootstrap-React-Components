import PropTypes from 'prop-types'
import React from 'react'
import CardTitle from './CardTitle'

export default class CardBody extends React.Component {

  static defaultProps = {}

  static propTypes = {
    children: PropTypes.node.isRequired,
    id      : PropTypes.string.isRequired,
    title   : PropTypes.string
  }

  render() {
    let {children, id, title} = this.props
    return (
      <div id={'CardBody-' + id} className={'card-body'}>
        {title ? <CardTitle id={'CardBody-title-' + id} title={title}/> : ''}
        {children}
      </div>
    )
  }
}

