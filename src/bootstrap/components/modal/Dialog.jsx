import PropTypes from 'prop-types'
import React     from 'react'

export default class Dialog extends React.Component {

	static propTypes = {
		children: PropTypes.node.isRequired,
		id      : PropTypes.string.isRequired
	}

	static defaultProps = {}

	render () {
		const {children, id} = this.props
		return (
			<div id={id} className={`modal-dialog ${id}`} >
				{children}
			</div >
		)
	}
}

