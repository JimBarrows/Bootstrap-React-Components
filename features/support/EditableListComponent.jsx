import React from 'react'
import {NumberFormGroup, TextFormGroup} from '../../src/'
import List from '../../src/EditableListGroup'

const data = [{name: 'Jane', age: 10}, {name: 'John', age: 20}]

class EditableListComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: data,
      current: null
    }
    this.addListItem = this.addListItem.bind(this)
    this.formElements = this.formElements.bind(this)
    this.header = this.header.bind(this)
    this.newItem = this.newItem.bind(this)
    this.onCancel = this.onCancel.bind(this)
    this.onChange = this.onChange.bind(this)
    this.removeListItem = this.removeListItem.bind(this)
    this.updateListItem = this.updateListItem.bind(this)
  }

  addListItem (item) {
    let id = this.state.list.length + 1
    this.setState(
      {
        current: null,
        list: [
          ...this.state.list, {
            id,
            name: item.name,
            age: item.age
          }
        ]
      }
    )
  }

  body (item) {
    return <p >{item.age}</p >
  }

  formElements (item) {
    let nameError = ''
    let ageError = ''
    // Both TextFormGroup and NumberFormGroup require onChange functions, however, they can be ignored because the list group provides a custom onChange
    return <div className='formElements' >
      <TextFormGroup error={nameError} id='name' label='Name' value={item.name} />
      <NumberFormGroup error={ageError} id='age' label='Age' value={item.age} />
    </div >
  }

  header (item) {
    return item.name
  }

  onCancel (event) {
    console.log('onCancel: ', event)
  }

  onChange (event, item) {
    let changedItem = Object.assign({}, item)
    if (event.target.id === 'name') {
      changedItem.name = event.target.value
    } else if (event.target.id === 'age') {
      changedItem.age = event.target.value
    }
    return changedItem
  }

  onSelected (item) {
    console.log('onSelected: ', item)
  }

  newItem () {
    return {name: '', age: 0}
  }

  removeListItem (item) {
    this.setState(
      {
        list: this.state.list.filter(i => i.id !== item.id)
      }
    )
  }

  render () {
    return <List addItem={this.addListItem}
      body={this.body}
      editFormElements={this.formElements}
      formElements={this.formElements}
      header={this.header}
      id='data_item_list'
      list={this.state.list}
      newItem={this.newItem}
      onCancel={this.onCancel}
      onChange={this.onChange}
      onSelected={this.onSelected}
      removeItem={this.removeListItem}
      updateItem={this.updateListItem} />
  }

  updateListItem (item) {
    let original = this.state.list.findIndex(l => l.id === item.id)
    let originalList = this.state.list
    originalList[original] = Object.assign({}, originalList[original], item)
    this.setState({list: originalList})
  }
}

export default EditableListComponent
