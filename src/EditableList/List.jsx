import React from "react";
import Item from "./Item";
import Editor from "./Editor";

class List extends React.Component {

	add( ) {
		this.setState({ adding: true, selected: this.props.newItem() });
	}

	addButton( ) {
		let { id } = this.props;
		return <button id={"addButton_" + id} type="button" class="btn btn-default btn-xs" onClick={this.add.bind( this )}>
			<span class="glyphicon glyphicon-plus" aria-hidden="true"/>Add
		</button>
	}

	addItem(item) {
		this.props.addItem(item);
		this.setState({
			adding: false,
			selected: {}
		})

	}

	addItemCancel() {
		this.setState({
			adding: false,
			selected: {}
		})
	}

	constructor( props ) {
		super( props );
		this.state = {
			adding: false,
			selected: null
		}
	}

	form( ) {
		let { formElements, onChange} = this.props;
		return <Editor id={"new_item"}
										onCancel={this.addItemCancel.bind(this)}
										onChange={onChange}
										onSubmit={this.addItem.bind( this )}
										formElements={formElements}
										item={this.state.selected}/>
	}

	onSelected(item) {
		this.setState({
			selected: item
		});
		this.props.onSelected(item);
	}

/*

																	*/
	render( ) {
		let {
			body,
			formElements,
			header,
			id,
			list,
			onChange,
			viewer
		} = this.props;
		let { adding } = this.state;
		return <div id={"list_ " + id}>
			{adding
				? this.form( )
				: this.addButton( )}
			<div id={"list_group_" + id} class="list-group">
			{list.map( ( i, index ) => <Item key={index}
																				body={body}
																				header={header}
																				id={id}
																				item={ i}
																				formElements={formElements}
																				onChange={onChange}
																				onSelected={this.onSelected.bind(this)}
																				onSubmit={this.updateItem.bind( this )}/>)}
			</div>
		</div>

	}
	removeItem( item ) {
		this.props.removeItem( item );
	}

	updateItem( item ) {
		this.props.updateItem( item );
	}
}

export default List;
