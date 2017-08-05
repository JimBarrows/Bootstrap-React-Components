import React from "react";
import data from "./EditableListTest/Data";
import { List } from "../../src/EditableList";
import { TextFormGroup, NumberFormGroup } from "../../src/";

class EditableListComponent extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			list: data,
			current: null
		}
	}

	addListItem( item) {
		let id = this.state.list.length + 1;
		this.setState({
			current: null,
			list: [
				...this.state.list, {
					id,
					name: item.name,
					age: item.age
				}
			]
		});
	}

	body( item ) {
		return <p>{item.age}</p>
	}

	formElements( item ) {
		let nameError = "";
		let ageError = "";
		return <div class="formElements">
			<TextFormGroup error={nameError} id="name" label="Name" value={item.name}/>
			<NumberFormGroup error={ageError} id="age" label="Age" value={item.age}/>
		</div>
	}

	header( item ) {
		return item.name;
	}

	onChange(event,item) {
		let changedItem = Object.assign( {}, item)
		if(event.target.id === 'name') {
			changedItem.name = event.target.value
		} else if ( event.target.id === 'age') {
			changedItem.age = event.target.value
		}
		return changedItem;
	}

	newItem( ) {
		return { name: '', age: 0 };
	}

	removeListItem( item ) {
		this.setState({
			list: this.state.list.filter( i => i.id === item.id )
		})
	}

	render( ) {
		return <List addItem={this.addListItem.bind(this)}
									body={this.body}
									editFormElements={this.formElements.bind( this )}
									formElements={this.formElements.bind( this )}
									header={this.header}
									id="data_item_list"
									list={this.state.list}
									newItem={this.newItem.bind( this )}
									onChange={this.onChange.bind(this)}
									updateItem={this.updateListItem.bind(this)}/>
	}

	updateListItem( item ) {
			let original = this.state.list.findIndex( l => l.id === item.id );
			let originalList = this.state.list;
			originalList[original] = Object.assign( {}, originalList[original], item );
			this.setState({ list: originalList })
	}
}

export default EditableListComponent;
