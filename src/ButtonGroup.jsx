'use strict';
import React from "react";

export default class ButtonGroup extends React.Component {

	render() {
		return (
				<div class="btn-group" role="group" aria-label="...">
					{this.props.children}
				</div>
		);
	}
}