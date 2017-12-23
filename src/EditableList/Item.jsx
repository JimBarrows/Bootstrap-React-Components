import PropTypes from 'prop-types'
import React from 'react'
import Editor from './Editor'
import Viewer from './Viewer'

class Item extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      editing: false
    }
    this.editing = this.editing.bind(this)
    this.remove = this.remove.bind(this)
    this.save = this.save.bind(this)
  }

  editing () {
    this.setState(
      {
        editing: true
      }
    )
  }

  editor () {
    let {id, formElements, onCancel, onChange, item} = this.props
    return <Editor id={'list_editor_ ' + id}
      onCancel={onCancel}
      onChange={onChange}
      onSave={this.save}
      formElements={formElements}
      item={item} />
  }

  remove () {
    this.props.remove(this.props.item)
  }

  render () {
    let {editing} = this.state
    return (editing) ? this.editor() : this.viewer()
  }

  save (item) {
    this.setState(
      {
        editing: false
      }
    )
    this.props.onSave(item)
  }

  viewer () {
    let {body, header, id, item} = this.props
    return <Viewer body={body(item)} header={header(item)} id={id} onEditButtonClick={this.editing}
      onRemoveButtonClick={this.remove} />
  }
}

Item.propTypes = {
  body: PropTypes.func.isRequired,
  formElements: PropTypes.func.isRequired,
  header: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
}

export default Item
