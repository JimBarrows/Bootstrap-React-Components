import PropTypes from 'prop-types'
import React from 'react'
import Card from '../bootstrap/components/Card'

export default class Panel extends React.Component {
  static defaultProps = {
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    context : PropTypes.string,
    id      : PropTypes.string.isRequired
  }

  render() {
    let {context, id} = this.props
    let attributes = {}
    if( context) {
      attributes['context'] = context
    }
    return (
      <Card id={'Panel-' + id} {...attributes}>
        {this.props.children}
      </Card>
    )
  }
}


