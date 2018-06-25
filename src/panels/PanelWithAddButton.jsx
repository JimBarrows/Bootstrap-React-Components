import PropTypes from 'prop-types'
import React from 'react'
import AddButton from '../buttons/AddButton'
import Panel from './Panel'
import PanelHeader from './PanelHeader'

export default class PanelWithAddButton extends React.Component {

  static defaultProps = {}

  static propTypes = {
    children: PropTypes.node.isRequired,
    onAddClick: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
  }

  render () {
    let {id, onAddClick, title} = this.props
    return (
      <Panel id={id} >
        <PanelHeader id={id} >
          <div className='float-left' >{title}</div >
          <div className='btn-group float-right' >
            <AddButton id={id} onClick={onAddClick} />
          </div >
        </PanelHeader >
        {this.props.children}
      </Panel >
    )
  }
}


