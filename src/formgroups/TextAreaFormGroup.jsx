import PropTypes from 'prop-types'
import React from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import FormGroup from '../bootstrap/forms/FormGroup'

export default class TextAreaFormGroup extends React.Component {
	static defaultProps = {}

	static propTypes = {
		disabled         : PropTypes.bool,
		id               : PropTypes.string.isRequired,
		label            : PropTypes.string,
		onChange         : PropTypes.func.isRequired,
		required         : PropTypes.bool,
		value            : PropTypes.string.isRequired,
		valid            : PropTypes.bool,
		validationMessage: PropTypes.string
	}
	       onChange  = value => {
		       this.setState({value})
		       if (this.props.onChange) {
			       this.props.onChange(
				       {
					       target:
						       {
							       id   : this.props.id,
							       value: value
						       }
				       }
			       )
		       }
	       }

	constructor(props) {
		super(props)
		this.state = {
			value: props.value
		}
	}

	render() {
		let {disabled, id, label, required, valid, validationMessage} = this.props
		let componentId                                               = `TextAreaFormGroup-${id}`
		let className                                                 = 'form-control'
		if (validationMessage) {
			className += valid ? " is-valid" : " is-invalid"
		}
		return <FormGroup id={componentId} label={label} required={required} valid={valid}
		                  validationMessage={validationMessage}>
			<ReactQuill
				id={componentId}
				className={className}
				onChange={this.onChange}
				value={this.state.value}
			/>
		</FormGroup>
	}
}
