import React from "react";
import { Editor } from "../../../src/EditableList";
import { TextFormGroup, NumberFormGroup } from "../../../src/";

class DataEditor extends Editor {

	ageChange( e ) {
		this.setState({ age: e.target.value })
	}

  componentWillMount() {
    this.propsToState(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.propsToState(nextProps);
  }

  propsToState(props) {
    if( props.item) {
    this.setState({
      name: props.item.name,
      age: props.item.age
    });
  } else {
    this.setState({
      name: '',
      age: 0
    })
  }
  }
	isValid( ) {
		if ( !this.state.name ) {
			this.setState({ nameError: "Name is required" });
			return false;
		}
		if ( !this.state.age ) {
			this.setState({ ageError: "Age is required" });
			return false;
		}
		return true;
	}

	nameChange( e ) {
		this.setState({ name: e.target.value })
	}

	render( ) {
		let { nameError, ageError, name, age } = this.state;
		return (
			<div id="DataEditor">
				<form id="dataEditorForm" onSubmit={this.onSubmit.bind( this )}>
					<TextFormGroup error={nameError} id="name" label="Name" onChange={this.nameChange.bind( this )} value={name}/>
					<NumberFormGroup error={ageError} id="age" label="Age" onChange={this.ageChange.bind( this )} value={age}/>
					<button id="submitDataEditorForm" type="submit" class="btn btn-success">Save</button>
				</form>
			</div>
		);
	}

	stateToItem( ) {
		let { name, age } = this.state;
		return { name, age }
	}
}

export default DataEditor;
