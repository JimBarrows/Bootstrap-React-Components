'use strict';
import React from "react";

export default class StripedTable extends React.Component {

	render() {
		let {id} = this.props;
		return (
				<table id={id + "Table"} class="table table-striped">
					{this.props.children}
				</table>
		);
	}
}