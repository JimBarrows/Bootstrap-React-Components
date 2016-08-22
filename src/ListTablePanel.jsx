'use strict';
import React from "react";
import ListPanel from "./ListPanel";
import StripedTable from "./StripedTable";


export default class ListTablePanel extends React.Component {

	render() {
		let {title, id, onReloadClick, onAddClick} = this.props;
		return (
				<ListPanel title={title} id={id} onReloadClick={onReloadClick} onAddClick={onAddClick}>
					<StripedTable id={id}>
						{this.props.children}
					</StripedTable>
				</ListPanel>
		);
	}
}