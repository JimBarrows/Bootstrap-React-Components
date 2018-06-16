import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'
import React from 'react'
import Button from '../src/bootstrap/components/Button'
import ButtonGroup from '../src/bootstrap/components/ButtonGroup'
import ButtonToolbar from '../src/bootstrap/components/ButtonToolbar'


storiesOf('bootstrap/components/Button Group', module)
  .add('Group of 1', () => <ButtonGroup id={'buttonGroupTest'}>
    <Button id={'buttonGroupTest'} onClick={action('Button 1 Clicked')}>Button 1</Button>
  </ButtonGroup>)
  .add('Group of 2', () => <ButtonGroup id={'buttonGroupTest'}>
    <Button id={'buttonGroupTest'} onClick={action('Button 1 Clicked')}>Button 1</Button>
    <Button id={'buttonGroupTest'} onClick={action('Button 2 Clicked')}>Button 2</Button>
  </ButtonGroup>)

storiesOf('bootstrap/components/Button Toolbar', module)
  .add('Toolbar with 1 button', () =>
    <ButtonToolbar id={'buttonToolbarTest1'}>
      <Button id={'buttonGroupTest'} onClick={action('Button 1 Clicked')}>Button 1</Button>
    </ButtonToolbar>)
  .add('Toolbar with 2 buttons', () =>
    <ButtonToolbar id={'buttonGroupTest2'}>
      <Button id={'buttonGroupTest1'} onClick={action('Button 1 Clicked')}>Button 1</Button>
      <Button id={'buttonGroupTest2'} onClick={action('Button 2 Clicked')}>Button 2</Button>
    </ButtonToolbar>)
  .add('Toolbar with 2 groups of 2 buttons', () =>
    <ButtonToolbar id={'buttonGroupTest3'}>
      <ButtonGroup id={'buttonGroupTest3Group1'} utilityClasses={'mr-2'}>
        <Button id={'buttonGroupTest3'} onClick={action('Button 1 Clicked')}>Button 1</Button>
        <Button id={'buttonGroupTest4'} onClick={action('Button 2 Clicked')}>Button 2</Button>
      </ButtonGroup>
      <ButtonGroup id={'buttonGroupTest3Group2'} utilityClasses={'mr-2'}>
        <Button id={'buttonGroupTest5'} onClick={action('Button 3 Clicked')}>Button 3</Button>
        <Button id={'buttonGroupTest6'} onClick={action('Button 4 Clicked')}>Button 4</Button>
      </ButtonGroup>
    </ButtonToolbar>)
  .add('Toolbar with input group', () =>
    <ButtonToolbar id={'buttonGroupTest2'} utilityClasses={'mb-3'}>
      <ButtonGroup id={'buttonGroupTest3Group1'} utilityClasses={'mr-2'}>
        <Button id={'buttonGroupTest1'} onClick={action('Button 1 Clicked')}>Button 1</Button>
        <Button id={'buttonGroupTest2'} onClick={action('Button 2 Clicked')}>Button 2</Button>
      </ButtonGroup>
      <div className="input-group">
        <div className="input-group-prepend">
          <div className="input-group-text" id="btnGroupAddon">@</div>
        </div>
        <input type="text" className="form-control" placeholder="Input group example" aria-label="Input group example"
               aria-describedby="btnGroupAddon"/>
      </div>
    </ButtonToolbar>)
  .add('Large Toolbar with 2 buttons', () =>
    <ButtonToolbar id={'buttonGroupTest2'} size={'large'}>
      <Button id={'buttonGroupTest1'} onClick={action('Button 1 Clicked')}>Button 1</Button>
      <Button id={'buttonGroupTest2'} onClick={action('Button 2 Clicked')}>Button 2</Button>
    </ButtonToolbar>)
  .add('Small Toolbar with 2 buttons', () =>
    <ButtonToolbar id={'buttonGroupTest2'} size={'small'}>
      <Button id={'buttonGroupTest1'} onClick={action('Button 1 Clicked')}>Button 1</Button>
      <Button id={'buttonGroupTest2'} onClick={action('Button 2 Clicked')}>Button 2</Button>
    </ButtonToolbar>)
