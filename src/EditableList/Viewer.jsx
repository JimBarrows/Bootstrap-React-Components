import React from "react";

class Viewer extends React.Component {

	render( ) {
		let { header, body, id, onEdit, onRemove } = this.props;

		return (
			<div id={"list_group_item_" + id} class="list-group-item ">
				{header
					? <h4 class="list-group-item-heading">{header}</h4>
					: ''}
				<div class="list-group-item-text" id={"list_group_item_text" + id}>{body}</div>
			</div>
    );
	}
}

export default Viewer;
