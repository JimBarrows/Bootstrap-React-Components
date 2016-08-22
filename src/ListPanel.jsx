'use strict';
import React from "react";
import Panel from "./Panel";
import PanelHeader from "./PanelHeader";
import PanelBody from "./PanelBody";
import AddButton from "./AddButton";


export default class ListPanel extends React.Component {

	render() {
		let {id, name, onAddClick, title} = this.props;
		let addButtonId                   = name + id + "AddButton";
		return (
				<Panel id={id }>
					<PanelHeader id={id}>
						<div class="panel-title pull-left">{title}</div>
						<div class="btn-group pull-right">
							<AddButton id={addButtonId} onClick={onAddClick}/>
						</div>
					</PanelHeader>
					<PanelBody id={id}>
						{this.props.children}
					</PanelBody>
				</Panel>
		);
	}
}