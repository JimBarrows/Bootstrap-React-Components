import PropTypes from 'prop-types'
import React     from 'react'

export default class TableBody extends React.Component {

	static defaultProps = {}

	static propTypes = {
		children: PropTypes.node.isRequired,
		id      : PropTypes.string.isRequired
	}

	render () {
		let {children, id} = this.props
		let className      = ''
		return (
			<tbody id={id} className={className} >
				{children}
			</tbody >
		)
	}
}

