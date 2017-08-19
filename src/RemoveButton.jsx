'use strict';
import React from "react";

export default class RemoveButton extends React.Component {

	render() {
		let {id, onClick} = this.props;
		return (
				<button id={"remove_button_" + id } type="button" class="btn btn-danger btn-xs" onClick={onClick}>
					<span class="glyphicon glyphicon-remove"/>
				</button>
		);
	}
}
