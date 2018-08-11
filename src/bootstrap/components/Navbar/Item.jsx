import PropTypes from 'prop-types'
import React from 'react'

export default class NavbarItem extends React.Component {

	static defaultProps = {
		active: false
	}

	static propTypes = {
		active  : PropTypes.bool,
		children: PropTypes.node.isRequired,
		id      : PropTypes.string.isRequired,
		onClick : PropTypes.func.isRequired
	}

	onClick = e => {
		e.preventDefault()
		this.props.onClick(e)
	}

	render() {
		let {active, children, id} = this.props
		let componentId            = `NavbarItem-${id}`
		return (
			<li id={componentId} className={'nav-item' + (active ? ' active' : '')}>
				<a id={`${componentId}-Link`} className='nav-link' href='#' onClick={this.onClick}>{children}</a>
			</li>
		)
	}
}
