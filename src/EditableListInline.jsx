import PropTypes from 'prop-types'
import React from 'react'

export default class EditableListInline extends React.Component {

  constructor (props) {
    super(props)
    this.add = this.add.bind(this)
    this.fieldChange = this.fieldChange.bind(this)
    this.state =
      {
        newItem: ''
      }
  }

  add () {
    this.props.add(this.state.newItem)
    this.setState(
      {
        newItem: ''
      }
    )
  }

  fieldChange (event) {
    this.setState(
      {
        newItem: event.target.value
      }
    )
  }

  remove (e) {
    this.props.remove(this.state.newIte)
  }

  render () {
    return (
      <div id={'EditableListInlineComponent_' + this.props.id} className='row' >
        <div className='col-xs-2' >
          <div className='form-group' >
            <div className='input-group' >
              <input className='form-control input-sm' id={'newItem_' + this.props.id} onChange={this.fieldChange}
                type='text'
                value={this.state.newItem} />

              <div className='input-group-btn' >
                <button className='btn btn-default btn-xs' onClick={this.add} >
                  <span className='glyphicon glyphicon-plus' aria-hidden='true' />
                </button >
              </div >
            </div >
          </div >
        </div >
        <div className='col-xs-10' >
          <ul className='list-inline' >
            {this.props.list.map((item, index) => <li key={index} >{item}&nbsp;
              <button className='btn btn-danger btn-xs' onClick={e => this.props.remove(item)} >
                <span className='glyphicon glyphicon-remove' aria-hidden='true' />
              </button >
            </li >)}
          </ul >
        </div >
      </div >
    )
  }
}

EditableListInline.propTypes = {
  add: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired
}

EditableListInline.defaultProps = {}