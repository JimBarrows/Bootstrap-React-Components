import PropTypes from 'prop-types'
import React     from 'react'

export default class NavItem extends React.Component {

	static defaultProps = {
		state: 'enabled'
	}

	static propTypes = {
		id     : PropTypes.string.isRequired,
		label  : PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired,
		state  : PropTypes.oneOf(['active', 'inactive', 'enabled', 'disabled'])
	}

	render () {
		let {id, label, onClick, state} = this.props
		let cssClasses                  = 'nav-item nav-link'
		if (state === 'active') {
			cssClasses += ' active'
		} else if (state === 'disabled') {
			cssClasses += ' disabled'
		}
		let componentId = `NavItem-${id}`
		return (
			<a id={componentId} className={cssClasses} onClick={onClick} href={'#'} >{label}</a >
		)
	}
}
