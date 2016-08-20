import React from "react";

export default class DangerAlert extends React.Component {

	render() {
		const {error, id}      = this.props;
		let optionalAttributes = [];
		if (id) {
			optionalAttributes.push({id});
		}
		var Alert = null;
		if (error) {
			Alert = (<div {...optionalAttributes} class="alert alert-danger" role="alert">{error}</div>)
		}
		return Alert

	}
}