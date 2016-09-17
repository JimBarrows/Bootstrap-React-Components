'use strict';
import React from "react";

export default class ButtonGroup extends React.Component {

	render() {
		let {id} = this.props;
		return (
				<div id={id + "ButtonGroup"} class="btn-group" role="group" aria-label="...">
					{this.props.children}
				</div>
		);
	}
}