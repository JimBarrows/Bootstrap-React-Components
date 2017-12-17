import React from 'react'
import {NumberFormGroup, TextFormGroup} from '../../../src/'
import {Editor} from '../../../src/EditableList'

class DataEditor extends Editor {
  ageChange (e) {
    this.props.ageChange(this.props.item, e.target.value)
  }

  isValid () {
    if (!this.state.name) {
      this.setState({nameError: 'Name is required'})
      return false
    }
    if (!this.state.age) {
      this.setState({ageError: 'Age is required'})
      return false
    }
    return true
  }

  nameChange (e) {
    this.props.nameChange(this.props.item, e.target.value)
  }

  render () {
    let {nameError, ageError} = this.props
    let {name, age} = this.props.item
    return (
      <div id='DataEditor' >
        <form id='dataEditorForm' onSubmit={this.onSubmit.bind(this)} >
          <TextFormGroup error={nameError} id='name' label='Name' onChange={this.nameChange.bind(this)} value={name} />
          <NumberFormGroup error={ageError} id='age' label='Age' onChange={this.ageChange.bind(this)} value={age} />
          <button id='submitDataEditorForm' type='submit' className='btn btn-success' >Save</button >
        </form >
      </div >
    )
  }

  stateToItem () {
    let {name, age} = this.state
    return {name, age}
  }
}

export default DataEditor
