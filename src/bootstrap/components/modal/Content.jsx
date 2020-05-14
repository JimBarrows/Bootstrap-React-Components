import PropTypes from 'prop-types'
import React     from 'react'

export default class Content extends React.Component {

	static propTypes = {
		children: PropTypes.node.isRequired,
		id      : PropTypes.string.isRequired
	}

	static defaultProps = {}

	render () {
		const {children, id} = this.props
		return (
			<div id={id} className={`modal-content ${id}`} >
				{children}
			</div >
		)
	}
}

