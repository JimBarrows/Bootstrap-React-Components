import PropTypes from 'prop-types'
import React from 'react'
import CardHeader from '../bootstrap/components/CardHeader'

export default class PanelHeader extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired
  }
  render () {
    let {id} = this.props
    return (
      <CardHeader id={'PanelHeader-' + id} >
        {this.props.children}
      </CardHeader >
    )
  }
}

