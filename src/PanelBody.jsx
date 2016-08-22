'use strict';
import React from "react";

export default class PanelBody extends React.Component {

	render() {
		let {id} = this.props;
		return (
				<div id={id + "PanelBody"} class="panel-body">
					{this.props.children}
				</div>
		);
	}
}