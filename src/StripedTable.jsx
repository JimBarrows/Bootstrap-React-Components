'use strict';
import React from "react";

export default class StripedTable extends React.Component {

	render() {
		return (
				<table class="table table-striped">
					{this.props.children}
				</table>
		);
	}
}