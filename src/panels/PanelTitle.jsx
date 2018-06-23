import PropTypes from 'prop-types'
import React from 'react'
import CardTitle from '../bootstrap/components/CardTitle'

export default class PanelTitle extends React.Component {

  static defaultProps = {}

  static propTypes = {
    children: PropTypes.array.isRequired,
    id      : PropTypes.string.isRequired
  }

  render() {
    let {children, id} = this.props
    return (
      <CardTitle id={'PanelTitle-' + id} title={children}/>
    )
  }
}

