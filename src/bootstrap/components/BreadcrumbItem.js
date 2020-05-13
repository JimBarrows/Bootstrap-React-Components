import PropTypes from 'prop-types'
import React     from 'react'

export default class BreadcrumbItem extends React.Component {
	static defaultProps = {
		active: false,
		page  : false
	}

	static propTypes = {
		active  : PropTypes.bool,
		children: PropTypes.node,
		id      : PropTypes.string.isRequired,
		page    : PropTypes.bool
	}

	render () {
		const {active, children, id, page} = this.props

		let attributes = {}
		if (page) {
			attributes['aria-current'] = 'page'
		}

		return <li id={id} className={'breadcrumb-item ' + (active ? 'active ' : '')} {...attributes}>
			{children}
		</li >
	}
}
