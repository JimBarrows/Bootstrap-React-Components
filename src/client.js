/**
 * Created by JimBarrows on 8/7/16.
 */
'use strict';

import React from "react";
import ReactDOM from "react-dom";
import PageHeader from "./PageHeader.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import TextAreaFormGroup from "./TextAreaFormGroup.jsx";

const app = document.getElementById('app');
ReactDOM.render(
		<div>
			<PageHeader title="Showcase"/>
			<TextAreaFormGroup label="Text area" name="textARea" error="" value="The quick brown fox."/>
		</div>, app);