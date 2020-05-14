import PropTypes from 'prop-types'
import React     from 'react'

export default class Header extends React.Component {

	static propTypes = {
		title: PropTypes.string.isRequired,
		id   : PropTypes.string.isRequired
	}

	static defaultProps = {}

	render () {
		const {id, title} = this.props
		return (
			<div id={id} className={`modal-header ${id}`} >
				<h5 className={`modal-title ${id}`} >{title}</h5 >
				<button type="button" className="close" data-dismiss="modal" aria-label="Close" >
					<span aria-hidden="true" >&times;</span >
				</button >
			</div >
		)
	}
}


