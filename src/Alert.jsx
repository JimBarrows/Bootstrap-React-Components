import React from "react";

export default class Alert extends React.Component {

	render( ) {
		const {
			children,
			onDismiss,
			id = "",
			type = "info",
			message
		} = this.props;

		var Alert = null;
		var dismissButton = "";
		var dismissClass = ""
		if ( onDismiss ) {
			dismissButton = <button id={"dismiss_button_" + id} onClick={onDismiss} type="button" class="close" data-dismiss="alert" aria-label="Close">
				<span aria-hidden="true">&times;</span>
			</button>
			dismissClass = "alert-dismissible";
		}

		if ( message ) {
			Alert = (
				<div id={"alert_" + id} class={"alert " + dismissClass + " alert-" + type} role="alert">{dismissButton}{message}</div>
			)
		} else {
			Alert = (
				<div id={"alert_" + id} class={"alert " + dismissClass + " alert-" + type} role="alert">{dismissButton}{children}</div>
			)
		}
		return Alert

	}
}
