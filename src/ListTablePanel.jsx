'use strict';
import React from "react";
import ListPanel from "./ListPanel";
import StripedTable from "./StripedTable";


export default class ListTablePanel extends React.Component {

	render() {
		let {title, name, onReloadClick, onAddClick} = this.props;
		return (
				<ListPanel title={title} name={name} onReloadClick={onReloadClick} onAddClick={onAddClick}>
					<StripedTable>
						{this.props.children}
					</StripedTable>
				</ListPanel>
		);
	}
}