import React from "react";

export default class DangerAlert extends React.Component {

	render() {
		const {error, id}      = this.props;

		var Alert = null;
		if (error) {
			Alert = (<div id={id} class="alert alert-danger" role="alert">{error}</div>)
		}
		return Alert

	}
}