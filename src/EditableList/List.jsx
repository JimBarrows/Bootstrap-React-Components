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

	componentWillReceiveProps(nextProps) {
		let { current, isNew, item } = nextProps;
		this.setState({
			adding: isNew(item),
			selected: current
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
		let { id, formElements, onChange} = this.props;
		return <Editor id={"list_editor_ " + id} onChange={onChange} onSubmit={this.onSubmit.bind( this )} formElements={formElements} item={this.state.selected}/>
	}

	onSelected(item) {
		this.setState({
			selected: item
		});
		this.props.onSelected(item);
	}

	onSubmit( item ) {
		this.props.onSubmit( item );
	}

/*
<Item key={index}
																	body={body}
																	header={header}
																	id={id}
																	isCurrent={isCurrent}
																	item={isCurrent() ? selected : i}
																	formElements={formElements}
																	onChange={onChange}
																	onSelected={this.onSelected.bind(this)}
																	onSubmit={this.onSubmit.bind( this )}/>
																	*/
	render( ) {
		let {
			body,
			formElements,
			header,
			id,
			isCurrent,
			list,
			onChange,
			selected,
			viewer
		} = this.props;
		let { adding } = this.state;
		return <div id={"list_ " + id}>
			{adding
				? this.form( )
				: this.addButton( )}
			<div id={"list_group_" + id} class="list-group">
			{list.map( ( i, index ) => <Editor id={"list_editor_ " + id}
																					key={index}
																					onChange={onChange}
																					onSubmit={this.onSubmit.bind( this )}
																					formElements={formElements}
																					item={i}/> )}
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
