'use strict';
import React from "react";

export default class Panel extends React.Component {

	render() {
		let {id} = this.props;
		return (
				<div id={id + "Panel"} class="panel panel-default">
					{this.props.children}
				</div>
		);
	}
}