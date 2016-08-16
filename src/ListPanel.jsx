'use strict';
import React from "react";
import Panel from "./Panel";
import PanelHeader from "./PanelHeader";
import PanelBody from "./PanelBody";
import AddButton from "./AddButton";
import ReloadButton from "./ReloadButton";


export default class ListPanel extends React.Component {

	render() {
		let {name, title, onReloadClick, onAddClick} = this.props;
		let reloadButtonId                           = name + "ReloadButton";
		let addButtonId                              = name + "AddButton";
		return (
				<Panel>
					<PanelHeader>
						<div class="panel-title pull-left">{title}</div>
						<div class="btn-group pull-right">
							<ReloadButton id={reloadButtonId} onClick={onReloadClick}/>
							<AddButton id={addButtonId} onClick={onAddClick}/>
						</div>
					</PanelHeader>
					<PanelBody>
						{this.props.children}
					</PanelBody>
				</Panel>
		);
	}
}