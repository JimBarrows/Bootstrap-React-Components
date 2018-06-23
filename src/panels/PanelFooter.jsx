import PropTypes from 'prop-types'
import React from 'react'
import CardFooter from '../bootstrap/components/CardFooter'

export default class PanelFooter extends React.Component {

  static propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired
  }

  static defaultProps = {}

  render () {
    let {id} = this.props
    return (
      <CardFooter id={'PanelFooter-' + id} text={'Panel footer'}/>
    )
  }
}

