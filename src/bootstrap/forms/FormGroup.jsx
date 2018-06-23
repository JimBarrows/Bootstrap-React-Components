import PropTypes from 'prop-types'
import React from 'react'

export default class FormGroup extends React.Component {
  static defaultProps = {
    required: false
  }

  static  propTypes = {
    children         : PropTypes.node.isRequired,
    id               : PropTypes.string.isRequired,
    label            : PropTypes.string,
    required         : PropTypes.bool,
    valid            : PropTypes.bool,
    validationMessage: PropTypes.string
  }

  render() {
    let {id, label, required, valid, validationMessage} = this.props
    let cssClasses                                      = 'form-group'
    let validationMessageTag                            = ''
    let labelTag =''
    if (validationMessage) {
      validationMessageTag = <div className={valid ? 'valid-feedback' : 'invalid-feedback'}>{validationMessage}</div>
    }
    let childrenWithProps = this.props.children
    if (required) {
      childrenWithProps = React.Children.map(this.props.children, (child) => React.cloneElement(child, {required: true})
      )
    }
    if( label && required) {
      labelTag = <label id={'FormGroupLabel-' + id} htmlFor={id}>{label}&nbsp;<small className='text-danger'>Required</small></label>
    } else if( label && !required) {
      labelTag = <label id={'FormGroupLabel-' + id} htmlFor={id}>{label}</label>
    } else if ( !label && required) {
      labelTag = <label id={'FormGroupLabel-' + id} htmlFor={id}><small className='text-danger'>Required</small></label>
    }

    return (
      <div id={'FormGroup-' + id} className={cssClasses}>
        {labelTag}
        {childrenWithProps}
        {validationMessageTag}
      </div>
    )
  }
}

