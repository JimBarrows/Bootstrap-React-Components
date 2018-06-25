import PropTypes from 'prop-types'
import React from 'react'

export default class TextArea extends React.Component {

  static defaultProps = {
    autofocus: false,
    cols     : 80,
    disabled : false,
    maxlength: 1024,
    required : false,
    rows     : 20
  }

  static propTypes = {
    cols       : PropTypes.number,
    cssClass   : PropTypes.string,
    disabled   : PropTypes.bool,
    id         : PropTypes.string.isRequired,
    maxlength  : PropTypes.number,
    onChange   : PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    required   : PropTypes.bool,
    rows       : PropTypes.number,
    value      : PropTypes.string.isRequired
  }

  render() {
    let {cols, cssClass, disabled, id, maxlength, onChange, placeholder, required, rows, value} = this.props
    if (cssClass) {
      cssClass = 'form-control ' + cssClass
    } else {
      cssClass = 'form-control'
    }
    return (
      <textarea
        className={cssClass}
        cols={cols}
        disabled={disabled}
        id={'form-control-' + id}
        maxLength={maxlength}
        name={'id'}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        required={required}
      >
        {value}
      </textarea>
    )
  }
}

