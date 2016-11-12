'use strict';
import React from "react";
import ButtonGroup from "./ButtonGroup";
import EditButton from "./EditButton";
import RemoveButton from "./RemoveButton";
import SaveButton from "./SaveButton";

export default class RowControlButtons extends React.Component {

	render() {
		let {editing, edit, id, save, remove} = this.props;

		let buttonGroup = editing ? (
				<ButtonGroup id={id}>
					<SaveButton id={id} onClick={save}/>
				</ButtonGroup>
		) : (<ButtonGroup id={id}>
					<EditButton id={id} onClick={edit}/>
					<RemoveButton id={id} onClick={remove}/>
				</ButtonGroup>
		);
		return buttonGroup;
	}
}