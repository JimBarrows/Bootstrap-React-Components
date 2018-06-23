import PropTypes from 'prop-types'
import React from 'react'
import CardBody from '../bootstrap/components/CardBody'

export default class PanelBody extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired
  }

  render () {
    return (
      <CardBody id={'PanelBody-' + this.props.id} >
        {this.props.children}
      </CardBody >
    )
  }
}


