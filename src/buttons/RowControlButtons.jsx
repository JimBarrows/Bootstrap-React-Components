import PropTypes from 'prop-types'
import React from 'react'
import ButtonGroup from '../bootstrap/components/ButtonGroup'
import CancelButton from './CancelButton'
import EditButton from './EditButton'
import RemoveButton from './RemoveButton'
import SaveButton from './SaveButton'

export default class RowControlButtons extends React.Component {

  static defaultProps = {
    editing: false
  }

  static propTypes = {
    cancel : PropTypes.func.isRequired,
    editing: PropTypes.bool,
    edit   : PropTypes.func.isRequired,
    id     : PropTypes.string.isRequired,
    save   : PropTypes.func.isRequired,
    remove : PropTypes.func.isRequired
  }

  render() {
    let {cancel, editing, edit, id, save, remove} = this.props
    let groupId                                   = 'row-control-buttons-' + id
    return editing
      ? <ButtonGroup id={groupId}><SaveButton id={groupId + '-save'} onClick={save}/><CancelButton
        id={groupId + '-cacnel'} onClick={cancel}/></ButtonGroup>
      : <ButtonGroup id={groupId}><EditButton id={groupId + '-edit'} onClick={edit}/><RemoveButton
        id={groupId + '-remove'} onClick={remove}/></ButtonGroup>
  }
}


