import PropTypes from 'prop-types'
import React     from 'react'
import Content   from './Content'
import Dialog    from './Dialog'

export default class Modal extends React.Component {

	static propTypes = {
		children: PropTypes.node.isRequired,
		id      : PropTypes.string.isRequired,
		show    : PropTypes.bool.isRequired
	}

	static defaultProps = {}

	render () {
		let {id, children, show} = this.props
		return (
			<div id={id} className={`modal ${id}` + show ? ' show' : ''} tabIndex={-1} role={'dialog'} >
				<Dialog id={id} >
					<Content id={id} >
						{children}
					</Content >
				</Dialog >

			</div >
		)
	}
}

