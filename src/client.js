/**
 * Created by JimBarrows on 8/7/16.
 */
'use strict';

import React from "react";
import ReactDOM from "react-dom";
import BasicEditor from "./BasicEditor.jsx";
import PageHeader from "./PageHeader.jsx";
import "bootstrap/dist/css/bootstrap.css";

const app = document.getElementById('app');
ReactDOM.render(
		<div>
			<PageHeader title="Showcase"/>
			<BasicEditor/>
		</div>, app);