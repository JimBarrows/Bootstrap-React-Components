import React from "react";

export default class PageHeader extends React.Component {

	render() {
		let {id} = this.props;
		return (
				<div id={id + "PageHeader"} class="page-header">
					{this.props.children}
				</div>
		);
	}
}
