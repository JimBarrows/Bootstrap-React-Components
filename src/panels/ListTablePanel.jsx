'use strict'
import PropTypes from 'prop-types'
import React from 'react'
import StripedTable from '../bootstrap/tables/StripedTable'
import ListPanel from './PanelWithAddButton'

export default class ListTablePanel extends React.Component {
  render () {
    let {title, id, onAddClick} = this.props
    return (
      <ListPanel title={title} id={id} onAddClick={onAddClick} >
        <StripedTable id={id} >
          {this.props.children}
        </StripedTable >
      </ListPanel >
    )
  }
}

ListTablePanel.defaultProps = {}

ListTablePanel.propTypes = {
  children: PropTypes.node.isRequired,
  onAddClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
