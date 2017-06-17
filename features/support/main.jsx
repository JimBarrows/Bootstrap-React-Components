
import React from "react";
import ReactDOM from "react-dom";
import {TextAreaFormGroup} from "../../src";

const mountNode = document.getElementById('app');


ReactDOM.render(
  <div>
    <h1>React test</h1>
    <TextAreaFormGroup cssClass="question"
                       id="question"
                       label="Question"
                       value="Qeustion"/>
  </div>
	, mountNode);
