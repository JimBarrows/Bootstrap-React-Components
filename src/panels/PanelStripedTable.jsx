import PropTypes from 'prop-types'
import React from 'react'
import StripedTable from '../bootstrap/tables/StripedTable'
import PanelWithAddButton from './PanelWithAddButton'

export default class PanelStripedTable extends React.Component {
  static defaultProps = {}

  static propTypes = {
    children: PropTypes.node.isRequired,
    onAddClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  render () {
    let {title, id, onAddClick} = this.props
    return (
      <PanelWithAddButton title={title} id={id} onAddClick={onAddClick} >
        <StripedTable id={id} >
          {this.props.children}
        </StripedTable >
      </PanelWithAddButton >
    )
  }
}


