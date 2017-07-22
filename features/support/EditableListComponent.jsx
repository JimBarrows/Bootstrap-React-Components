import React from "react";
import data from "./EditableListTest/Data";
import { List} from "../../src/EditableList";
import { TextFormGroup, NumberFormGroup } from "../../src/";

class EditableListComponent extends React.Component {

	constructor( props ) {
		super( props );
		this.state = {
			list: data
		}
	}

	addListItem( ) {
		let id = this.state.list.length + 1;
		this.setState({
      selected: {},
			list: [
				...this.state.list, {
					id,
					name: this.state.selected.name,
					age: this.state.selected.age
				}
			]
		});
	}
  ageChange(e) {
    this.setState({
      selected: Object.assign({},this.state.selected,{
        age:e.target.value
      })
    })
  }

  body(item) {
    return <p>{item.age}</p>
  }

  formElements(item) {
    let nameError="";
    let ageError="";
    return <div class="formElements">
    <TextFormGroup error={nameError} id="name" label="Name" onChange={this.nameChange.bind( this )} value={item.name}/>
    <NumberFormGroup error={ageError} id="age" label="Age" onChange={this.ageChange.bind( this )} value={item.age}/>
    </div>
  }

  header(item) {
    return item.name;
  }

	nameChange( e ) {
    this.setState({
      selected: Object.assign({},this.state.selected,{
        name:e.target.value
      })
    })
	}

  onSelected(item) {
    if(item) {
      this.setState({
        selected: item
      })
    } else {
      this.setState({
        selected: {
          name: '',
          age:0
        }
      })
    }
  }

	removeListItem( item ) {
		this.setState({
			list: this.state.list.filter( i => i.id === item.id )
		})
	}

	render( ) {
    return <List body={this.body} formElements={this.formElements.bind(this)} header={this.header}  id="data_item_list" list={this.state.list} onSelected={this.onSelected.bind(this)} onSubmit={this.addListItem.bind(this)} selected={this.state.selected}/>
	}

	updateListItem( item ) {
		if ( item.id ) {
			let original = this.state.list.find( l => l.id === item.id );
			original.name = item.name;
			original.age = item.age;
		} else {
			this.addListItem( item );
		}
	}
}

export default EditableListComponent;
