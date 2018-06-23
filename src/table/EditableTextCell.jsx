import PropTypes from 'prop-types'
import React from 'react'
import FormControl from '../bootstrap/forms/FormControl'

export default class EditableTextCell extends React.Component {

  static defaultProps = {
    edit    : false,
    required: false
  }

  static propTypes = {
    cssClass   : PropTypes.string,
    edit       : PropTypes.bool,
    id         : PropTypes.string.isRequired,
    onChange   : PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    required   : PropTypes.bool,
    value      : PropTypes.string.isRequired
  }

  constructor(props) {
    super(props)
  }


  render() {
    let {cssClass, edit, id, onChange, placeholder, required, value} = this.props
    let input                                                              = edit ?
      <FormControl cssClass={cssClass} id={'EditableCell-' + id} onChange={onChange} placeholder={placeholder} required={required} value={value}/>
      : <span id={'EditableCellDisplay-'}>{value}</span>
    return (<td id={'EditableCell-' + id}>{input}</td>)
  }
}

