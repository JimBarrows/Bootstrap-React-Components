'use strict';
import React from "react";

export default class CancelButton extends React.Component {

	render() {
		let {id, onClick} = this.props;
		return (
				<button id={"cancel_button_" + id } type="button" class="btn btn-default btn-xs" onClick={onClick}>
					<span class="glyphicon glyphicon-ban-circle"/>
				</button>
		);
	}
}
