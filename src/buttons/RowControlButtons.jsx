'use strict'
import PropTypes from 'prop-types'
import React from 'react'
import ButtonGroup from '../bootstrap/components/ButtonGroup'
import CancelButton from './CancelButton'
import EditButton from './EditButton'
import RemoveButton from './RemoveButton'
import SaveButton from './SaveButton'

export default class RowControlButtons extends React.Component {
  render () {
    let {cancel, editing, edit, id, save, remove} = this.props

    return editing
      ? <ButtonGroup id={'button_group_' + id} > <SaveButton id={id} onClick={save} /> <CancelButton id={id}
        onClick={cancel} /> </ButtonGroup >
      : <ButtonGroup id={'button_group_' + id} > <EditButton id={id} onClick={edit} /> <RemoveButton id={id}
        onClick={remove} /> </ButtonGroup >
  }
}

RowControlButtons.defaultProps = {
  editing: false
}

RowControlButtons.propTypes = {
  cancel: PropTypes.func.isRequired,
  editing: PropTypes.bool,
  edit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  save: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
}
