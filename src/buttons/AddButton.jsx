import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import PropTypes         from 'prop-types'
import React             from 'react'

export default class AddButton extends React.Component {

	static propTypes = {
		id     : PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired
	}

	render () {
		const {id, onClick} = this.props
		return (
			<button type='button' id={'AddButton' + id} onClick={onClick} className='btn btn-light btn-sm' >
				<FontAwesomeIcon icon='plus' />
			</button >
		)
	}
}

