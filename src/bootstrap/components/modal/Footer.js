import PropTypes from 'prop-types'
import React     from 'react'

export default class Header extends React.Component {

	static propTypes = {
		children: PropTypes.node.isRequired,
		id      : PropTypes.string.isRequired
	}

	static defaultProps = {}

	render () {
		const {id, children} = this.props
		return (
			<div id={id} className={`modal-footer ${id}`} >
				{children}
			</div >
		)
	}
}


