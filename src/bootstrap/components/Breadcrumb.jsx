import PropTypes from 'prop-types'
import React     from 'react'

export default class Breadcrumb extends React.Component {
	static defaultProps = {}

	static propTypes = {
		children: PropTypes.node,
		id      : PropTypes.string.isRequired
	}

	render () {
		const {children, id} = this.props


		return <nav id={id} aria-label={'breadcrumb'} >
			<ol className={'breadcrumb'} >
				{children}
			</ol >
		</nav >
	}
}
