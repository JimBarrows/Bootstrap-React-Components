import React from "react";
import Editor from "./Editor";
import Viewer from "./Viewer";

class Item extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			editing: false
		}
	}

	editing(e) {
		this.setState({
			editing: true
		});
	}

	editor() {
		let {id, formElements, onChange, item} =this.props;
		return <Editor id={"list_editor_ " + id}
										onChange={onChange}
										onSubmit={this.save.bind(this)}
										formElements={formElements}
										item={item}/>
	}

	remove() {
		this.props.remove(this.props.item);
	}

	render() {
		let {editing} = this.state;
		let element                       = (editing ) ? this.editor(this.props.item) : this.viewer();
		return element;
	}

	save(item) {
		this.setState({
			editing: false
		});
		this.props.onSubmit(item);
	}

	viewer() {
		let {body, header, id, item } =this.props;
		return <Viewer body={body( item )} header={header( item )} id={id} onEditButtonClick={this.editing.bind(this)} onRemoveButtonClick={this.remove.bind(this)}/>
	}
}

export default Item;
