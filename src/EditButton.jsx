'use strict';
import React from "react";

export default class EditButton extends React.Component {

	render() {
		let {id, onClick} = this.props;
		return (
				<button id={id + "EditButton"} type="button" class="btn btn-default btn-xs" onClick={onClick}>
					<span class="glyphicon glyphicon-pencil"/>
				</button>
		);
	}
}