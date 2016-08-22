'use strict';
import React from "react";

export default class PanelHeader extends React.Component {

	render() {
		let {id} = this.props;
		return (
				<div id={id + "PanelHeader"} class="panel-heading clearfix">
					{this.props.children}
				</div>
		);
	}
}