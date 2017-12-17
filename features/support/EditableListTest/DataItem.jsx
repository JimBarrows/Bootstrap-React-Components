import React from 'react'
import ButtonGroup from '../../../src/ButtonGroup'
import {Item} from '../../../src/EditableList'
import EditButton from '../../../src/EditButton'
import RemoveButton from '../../../src/RemoveButton'
import DataEditor from './DataEditor'

class DataItem extends Item {
  editor (item) {
    return <DataEditor item={item} allowEditing={this.props.allowEditing} onSubmit={this.save.bind(this)} />
  }

  viewer (item) {
    let id = item.id ? item.id : item.name
    return <li > {item.name} - {item.age}
      <ButtonGroup id={id} >
        <EditButton id={id} onClick={this.editing.bind(this)} />
        <RemoveButton id={id} onClick={this.remove.bind(this)} />
      </ButtonGroup >
    </li >
  }
}

export default DataItem
