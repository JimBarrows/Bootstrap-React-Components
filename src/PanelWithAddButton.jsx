import PropTypes from 'prop-types'
import React from 'react'
import AddButton from './AddButton'
import Panel from './Panel'
import PanelBody from './PanelBody'
import PanelHeader from './PanelHeader'

export default class PanelWithAddButton extends React.Component {
  render () {
    let {id, onAddClick, title} = this.props
    return (
      <Panel id={id} >
        <PanelHeader id={id} >
          <div className='panel-title pull-left' >{title}</div >
          <div className='btn-group pull-right' >
            <AddButton id={id + 'AddButton'} onClick={onAddClick} />
          </div >
        </PanelHeader >
        {this.props.children}
      </Panel >
    )
  }
}

PanelWithAddButton.defaultProps = {}

PanelWithAddButton.propTypes = {
  children: PropTypes.node.isRequired,
  onAddClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}
