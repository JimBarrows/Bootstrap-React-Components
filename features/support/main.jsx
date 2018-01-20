import React from 'react'
import ReactDOM from 'react-dom'
import '../../node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Alert, PageHeader, RowControlButtons, TextAreaFormGroup} from '../../src'
import EditableListComponent from './EditableListComponent'
import EditableListInlineComponent from './EditableListInlineComponent'
import ListGroupComponent from './ListGroupComponent'
import ListInlineComponent from './ListInlineComponent'
import PaginationComponent from './PaginationComponent'

const mountNode = document.getElementById('app')

ReactDOM.render(
  <div className='container' >
    <PageHeader id='ReactTest' >
      <h1 >Bootstrap React Components Tests</h1 >
    </PageHeader >
    <h1 >CSS</h1 >
    <h2 > Grid System</h2 >
    <h2 >Typeography</h2 >
    <h3 >Lists</h3 >
    <h4 >Inline</h4 >
    <h5 >Read only</h5 >
    <ListInlineComponent />
    <h5 >Editable</h5 >
    <EditableListInlineComponent />
    <h2 >Code</h2 >
    <h2 >Tables</h2 >
    <h2 >Forms</h2 >
    <h3 >Supported Controls</h3 >
    <h4 >Text Area</h4 >
    <TextAreaFormGroup cssclassName='question' id='question' label='Question'
      onChange={e => console.log('text area changed: ', e)} value='Question' />
    <h2 >Buttons</h2 >
    <h2 >Images</h2 >
    <h2 >HelperClasses</h2 >
    <h2 >Responsive Utilities</h2 >

    <h1 >Components</h1 >
    <h2 >Pagination</h2 >
    <PaginationComponent />
    <h2 >Alerts</h2 >
    <h3 >Plain</h3 >
    <Alert id='plain' message='This is a basic alert message' />
    <Alert id='children' >
      <ul >
        <li >Message 1</li >
        <li >Message 2</li >
      </ul >
    </Alert >
    <Alert id='plain_success' type='success' message='This is a basic success alert message' />
    <Alert id='plain_warning' type='warning' message='This is a basic warning alert message' />
    <Alert id='plain_danger' type='danger' message='This is a basic danger alert message' />
    <h3 >Dismissable</h3 >
    <Alert id='dismissable' onDismiss={() => {
    }} message='This is a dismissable alert message' />
    <Alert id='children' onDismiss={() => {
    }} >
      <ul >
        <li >Message 1</li >
        <li >Message 2</li >
      </ul >
    </Alert >
    <Alert id='plain_success' onDismiss={() => {
    }} type='success' message='This is a basic success alert message' />
    <Alert id='plain_warning' onDismiss={() => {
    }} type='warning' message='This is a basic warning alert message' />
    <Alert id='plain_danger' onDismiss={() => {
    }} type='danger' message='This is a basic danger alert message' />
    <h2 >List Group</h2 >
    <h3 >Editable List Group</h3 >
    <EditableListComponent />
    <h3 >List Group</h3 >
    <ListGroupComponent />
    <h1 >Javascript</h1 >


    <h1 >Row Control Buttons</h1 >
    <RowControlButtons cancel={() => {
    }} editing={false} edit={() => {
    }} id='not_editing' save={() => {
    }} remove={() => {
    }} />
    <br />
    <RowControlButtons cancel={() => {
    }} editing={true} edit={() => {
    }} id='editing' save={() => {
    }} remove={() => {
    }} />
  </div >, mountNode)
