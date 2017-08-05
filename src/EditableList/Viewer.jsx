import React from "react";
import ButtonGroup from "../ButtonGroup";
import EditButton from "../EditButton";
import RemoveButton from "../RemoveButton";

class Viewer extends React.Component {

	render( ) {
		let { body, header,  id, onEditButtonClick, onRemoveButtonClick } = this.props;
    let this_id = "list_group_item_" + id
		return (
			<div id={this_id} class="list-group-item ">
				{header
					? <h4 id={this_id + "_header"} class="list-group-item-heading">
              {header}
              <ButtonGroup id={this_id}>
                <EditButton id={this_id} onClick={onEditButtonClick}/>
                <RemoveButton id={this_id} onClick={onRemoveButtonClick}/>
              </ButtonGroup>
            </h4>
					: ''}
				<div class="list-group-item-text" id={"list_group_item_text" + id}>{body}</div>
			</div>
    );
	}
}

export default Viewer;
