import React from "react";

import PageHeader from "../PageHeader";

class Item extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			editing: false,
			allowEditing: false
		}
	}

	editing(e) {
		this.setState({
			editing: true
		});
	}

	editor(item) {
		return "";
	}

	remove() {
		this.props.remove(this.state.item);
	}

	render() {
		let {editing} = this.state;
		let element                       = (editing && this.props.allowEditing) ? this.editor(this.props.item) : this.viewer(this.props.item);
		return element;
	}

	save(item) {
		this.setState({
			editing: false
		});
		this.props.save(item);
	}

	viewer(item) {
		return "";
	}
}

export default Item;
