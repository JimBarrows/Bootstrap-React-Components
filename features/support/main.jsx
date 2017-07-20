import React from "react";
import ReactDOM from "react-dom";
import {TextAreaFormGroup} from "../../src";
import EditableListTest from "./EditableListTest";

const mountNode = document.getElementById('app');

ReactDOM.render(
  <div>
  <h1>React test</h1>
  <h2>Form Group</h2>
  <TextAreaFormGroup cssClass="question" id="question" label="Question" value="Qeustion"/>
  <h2>Editable List</h2>
  <h3>All Internal Changes</h3>
  <EditableListTest list={[{name:"hello", age:30}, {name:"Goodby", age:40}]}/>
  <h3>External notifications of changes</h3>
</div>, mountNode);
