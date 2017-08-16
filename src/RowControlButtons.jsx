'use strict';
import React from "react";
import ButtonGroup from "./ButtonGroup";
import EditButton from "./EditButton";
import RemoveButton from "./RemoveButton";
import SaveButton from "./SaveButton";

class RowControlButtons extends React.Component {

	render() {
		let {editing, edit, id, save, remove} = this.props;

		let buttonGroup = editing ? (
				<ButtonGroup id={"button_group_" + id}>
					<SaveButton id={id} onClick={save}/>
				</ButtonGroup>
		) : (<ButtonGroup id={"button_group_" + id}>
					<EditButton id={id} onClick={edit}/>
					<RemoveButton id={id} onClick={remove}/>
				</ButtonGroup>
		);
		return buttonGroup;
	}
}

export default RowControlButtons;
