import PropTypes from 'prop-types'
import React from 'react'
import Card from '../bootstrap/components/Card'

export default class Panel extends React.Component {
  static defaultProps = {
    context: ''
  }

  static propTypes = {
    children: PropTypes.node.isRequired,
    context : PropTypes.string,
    id      : PropTypes.string.isRequired
  }

  render() {
    let {context, id} = this.props
    return (
      <Card id={'Panel-' + id} context={context}>
        {this.props.children}
      </Card>
    )
  }
}


