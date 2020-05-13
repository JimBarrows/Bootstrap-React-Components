import PropTypes from 'prop-types'
import React     from 'react'

export default class Alert extends React.Component {
	static defaultProps = {
		context: 'info'
	}

	static propTypes = {
		children : PropTypes.node,
		onDismiss: PropTypes.func,
		id       : PropTypes.string.isRequired,
		context  : PropTypes.oneOf(['danger', 'dark', 'info', 'light', 'primary', 'secondary', 'success', 'warning']).isRequired
	}

	render () {
		const {children, onDismiss, id, context} = this.props

		let dismissButton = ''
		let dismissClass  = ''
		if (onDismiss) {
			dismissButton =
				<button id={'dismiss_button_' + id} onClick={onDismiss} context='button' className='close' data-dismiss='alert'
					aria-label='Close' >
					<span aria-hidden='true' >&times;</span >
				</button >
			dismissClass  = 'alert-dismissible'
		}

		return <div id={'id'} className={'alert ' + dismissClass + ' alert-' + context}
			role='alert' >{dismissButton}{children}</div >
	}
}

