import PropTypes from 'prop-types'
import React from 'react'
import Editor from './Editor'
import Item from './Item'

class List extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      adding: false,
      selected: null
    }
    this.add = this.add.bind(this)
    this.addItem = this.addItem.bind(this)
    this.addItemCancel = this.addItemCancel.bind(this)
    this.onSelected = this.onSelected.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.updateItem = this.updateItem(this)
  }

  add () {
    this.setState({adding: true, selected: this.props.newItem()})
  }

  addButton () {
    let {id} = this.props
    return <button id={'addButton_' + id} type='button' className='btn btn-default btn-xs' onClick={this.add} >
      <span className='glyphicon glyphicon-plus' aria-hidden='true' />Add
    </button >
  }

  addItem (item) {
    this.props.addItem(item)
    this.setState(
      {
        adding: false,
        selected: {}
      }
    )
  }

  addItemCancel () {
    this.setState(
      {
        adding: false,
        selected: {}
      }
    )
  }

  form () {
    let {formElements, onChange} = this.props
    return <Editor id={'new_item'}
      onCancel={this.addItemCancel}
      onChange={onChange}
      onSave={this.addItem}
      formElements={formElements}
      item={this.state.selected} />
  }

  onSelected (item) {
    this.setState(
      {
        selected: item
      }
    )
    this.props.onSelected(item)
  }

  /*

                                    */
  render () {
    let {
      body,
      formElements,
      header,
      id,
      list,
      onCancel,
      onChange
    } = this.props
    let {adding} = this.state
    return <div id={'list_ ' + id} >
      {adding
        ? this.form()
        : this.addButton()}
      <div id={'list_group_' + id} className='list-group' >
        {list.map((i, index) => <Item key={index}
          body={body}
          header={header}
          id={id}
          item={i}
          formElements={formElements}
          onCancel={onCancel}
          onChange={onChange}
          onSelected={this.onSelected}
          onSubmit={this.updateItem}
          remove={this.removeItem} />)}
      </div >
    </div >
  }

  removeItem (item) {
    this.props.removeItem(item)
  }

  updateItem (item) {
    this.props.updateItem(item)
  }
}

List.propTypes = {
  addItem: PropTypes.func.isRequired,
  body: PropTypes.node.isRequired,
  formElements: PropTypes.node.isRequired,
  header: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  newItem: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
  updateItem: PropTypes.func.isRequired
}
export default List
