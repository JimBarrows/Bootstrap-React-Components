import {storiesOf} from '@storybook/react'

import React from 'react'
import FormGroup from '../src/bootstrap/forms/FormGroup'


storiesOf('bootstrap/forms', module)
  .add('Form Group', () =>
    <FormGroup id={'formGroup'} label={'Form Group Test'}>
      <input type={'text'} className="form-control"/>
    </FormGroup>)
  .add('Required Form Group', () =>
    <FormGroup id={'formGroup'} label={'Required Form Group Test'} required={true}>
      <input type={'text'} className="form-control"/>
    </FormGroup>)
  .add('Form Group with error', () =>
    <FormGroup id={'formGroup'} label={'Required Form Group Test'} error={"This is not right"}>
      <input type={'text'} className="form-control"/>
    </FormGroup>)