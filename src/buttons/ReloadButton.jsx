import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import PropTypes         from 'prop-types'
import React             from 'react'

export default class ReloadButton extends React.Component {

	static propTypes = {
		id     : PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired
	}

	render () {
		let {id, onClick} = this.props
		return <button id={id} type='button' className='btn btn-light btn-small' onClick={onClick} >
			<FontAwesomeIcon icon={'sync'} />
		</button >
	}
}


