import React from 'react'
import EditableListInline from '../../src/EditableListInline'

export default class EditableListInlineComponent extends React.Component {
  constructor (props) {
    super(props)
    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)
    this.state = {
      list: ['fi', 'fo', 'fum']
    }
  }

  addItem (item) {
    this.setState({list: [...this.state.list, item]})
  }

  removeItem (item) {
    this.setState({list: this.state.list.filter(i => i !== item)})
  }

  render () {
    return (
      <div id={'EditableListInlineComponentComponent_'} >
        <EditableListInline add={this.addItem} id={'ThisIsATest'}
          list={this.state.list} remove={this.removeItem} />
      </div >
    )
  }
}

EditableListInlineComponent.propTypes = {}

EditableListInlineComponent.defaultProps = {}
