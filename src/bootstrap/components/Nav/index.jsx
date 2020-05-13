import PropTypes from 'prop-types'
import React     from 'react'

export default class index extends React.Component {

	static defaultProps = {
		fill    : false,
		look    : 'plain',
		position: 'left'
	}

	static propTypes = {
		children: PropTypes.node.isRequired,
		id      : PropTypes.string.isRequired,
		look    : PropTypes.oneOf(['plain', 'tabs', 'pills']),
		position: PropTypes.oneOf(['fill', 'justify', 'left', 'center', 'right', 'vertical']),
	}

	render () {
		let {children, id, look, position} = this.props
		let className                      = 'nav'
		switch (position) {
			case 'center':
				className += ' justify-content-center'
				break
			case 'right':
				className += ' justify-content-end'
				break
			case 'vertical':
				className += ' flex-column'
				break
			case 'fill':
				className += ' nav-fill'
				break
			case 'justify':
				className += ' nav-justified'
				break
		}
		switch (look) {
			case 'tabs':
				className += ' nav-tabs'
				break
			case 'pills':
				className += ' nav-pills'
		}

		return (
			<nav id={'Nav-' + id} className={className} >
				{children}
			</nav >
		)
	}
}
