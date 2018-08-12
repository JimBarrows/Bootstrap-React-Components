import PropTypes from 'prop-types'
import React from 'react'
import FontAwesome from 'react-fontawesome'

export default class RemoveButton extends React.Component {

	static propTypes = {
		id     : PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired
	}

	render() {
		let {id, onClick} = this.props
		return <button id={'remove-button-' + id} type='button' className='btn btn-light btn-small' onClick={onClick}>
			<FontAwesome name={'trash'}/>
		</button>
	}
}


