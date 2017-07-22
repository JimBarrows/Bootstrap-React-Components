import React from "react";
import Viewer from "./Viewer";
import Editor from "./Editor";

class List extends React.Component {

	add( ) {
		this.setState({ adding: true });
		this.props.onSelected({});
	}

	addButton() {
		let {id}=this.props;
		return <button id={"addButton_" + id} type="button" class="btn btn-default btn-xs" onClick={this.add.bind( this )}>
			<span class="glyphicon glyphicon-plus" aria-hidden="true"/>Add
		</button>
	}

	constructor( props ) {
		super( props );
		this.state = {
			adding: false
		}
	}

	form() {
		let {id, formElements, selected} =this.props;
		return <Editor id={"list_editor_ " + id} onSubmit={this.onSubmit.bind(this)}>{formElements(selected)}</Editor>
	}

	onSubmit(e) {
		this.setState({
			adding: false
		});
		this.props.onSubmit(e);
	}
	render( ) {
		let { body, header, id, list, selected, viewer } = this.props;
		let {adding} = this.state;
		return <div id={"list_ " + id}>
						{adding?this.form():this.addButton()}
						<div id={"list_group_" + id} class="list-group">{list.map( ( i, index ) => <Viewer key={index} body={body( i )} header={header( i )} id={id}/> )}</div>
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
