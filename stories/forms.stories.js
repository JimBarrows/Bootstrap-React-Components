import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'

import React from 'react'
import FormControl from '../src/bootstrap/forms/FormControl'
import FormGroup from '../src/bootstrap/forms/FormGroup'
import TextArea from '../src/bootstrap/forms/TextArea'


storiesOf('bootstrap/forms', module)
  .add('Form Group', () =>
    <form>
      <FormGroup id={'formGroup'} label={'Form Group Test'}>
        <input type={'text'} className="form-control"/>
      </FormGroup>
    </form>)
  .add('Required Form Group', () =>
    <form>
      <FormGroup id={'formGroup'} label={'Required Form Group Test'} required={true}>
        <input type={'text'} className="form-control"/>
      </FormGroup>
    </form>)
  .add('Form Group with error', () =>
    <form>
      <FormGroup id={'formGroup'} label={'Required Form Group Test'} error={"This is not right"}>
        <input type={'text'} className="form-control"/>
      </FormGroup>
    </form>)
  .add('Form control - button', () =>
    <form>
      <FormGroup id={'button'} label={'Button'}>
        <FormControl cssClass={'btn btn-info'} id={'formcontrol-button'} onChange={action('button pressed')}
                     type={'button'} value={'Click me'}/>
      </FormGroup>
    </form>)
  .add('Form control - checkbox', () =>
    <form>
      <FormGroup id={'formcontrol-checkbox'} label={'Checkbox'}>
        <FormControl id={'checkbox'} onChange={action('Checkbox clicked')} type={'checkbox'} value={'Check me'}/>
      </FormGroup>
    </form>)
  .add('Form control - color', () =>
    <form>
      <FormGroup id={'formcontrol-color'} label={'Color'}>
        <FormControl id={'color'} onChange={action('Color changed')} type={'color'} value={'#161821'}/>
      </FormGroup>
    </form>)
  .add('Form control - date', () =>
    <form>
      <FormGroup id={'formcontrol-date'} label={'Date'}>
        <FormControl id={'date'} onChange={action('Date changed')} type={'date'} value={'2018-01-01'}/>
      </FormGroup>
    </form>)
  .add('Form control - datetime-local', () =>
    <form>
      <FormGroup id={'formcontrol-datetime-local'} label={'datetime-local'}>
        <FormControl id={'datetime-local'} onChange={action('Datetime-local changed')} type={'datetime-local'}
                     value={''}/>
      </FormGroup>
    </form>)
  .add('Form control - email', () =>
    <form>
      <FormGroup id={'formcontrol-email'} label={'email'}>
        <FormControl id={'email'} onChange={action('Email changed')} type={'email'} value={''}/>
      </FormGroup>
    </form>)
  .add('Form control - file', () =>
    <form>
      <FormGroup id={'formcontrol-file'} label={'file'}>
        <FormControl id={'file'} onChange={action('File changed')} type={'file'} value={''}/>
      </FormGroup>
    </form>)
  .add('Form control - hidden', () =>
    <form>
      <FormGroup id={'formcontrol-hidden'} label={'hidden'}>
        <FormControl id={'hidden'} onChange={action('hidden changed')} type={'hidden'} value={''}/>
      </FormGroup>
    </form>)
  .add('Form control - image', () =>
    <form>
      <FormGroup id={'formcontrol-image'} label={'image'}>
        <FormControl id={'image'} onChange={action('image changed')} type={'image'} value={''}/>
      </FormGroup>
    </form>)
  .add('Form control - month', () =>
    <form>
      <FormGroup id={'formcontrol-month'} label={'month'}>
        <FormControl id={'month'} onChange={action('month changed')} type={'month'} value={'2018-05'}/>
      </FormGroup>
    </form>)
  .add('Form control - number', () =>
    <form>
      <FormGroup id={'formcontrol-number'} label={'number'}>
        <FormControl id={'number'} onChange={action('number changed')} type={'number'} value={3}/>
      </FormGroup>
    </form>)
  .add('Form control - password', () =>
    <form>
      <FormGroup id={'formcontrol-password'} label={'password'}>
        <FormControl id={'password'} onChange={action('password changed')} type={'password'}
                     value={'This is not a password'}/>
      </FormGroup>
    </form>)
  .add('Form control - radio', () =>
    <form>
      <FormGroup id={'formcontrol-radio'} label={'radio'}>
        <FormControl id={'radio'} onChange={action('radio changed')} type={'radio'} value={'value'}/>
      </FormGroup>
    </form>)
  .add('Form control - range', () =>
    <form>
      <FormGroup id={'formcontrol-range'} label={'range'}>
        <FormControl id={'range'} onChange={action('range changed')} type={'range'} value={'6'}/>
      </FormGroup>
    </form>)
  .add('Form control - reset', () =>
    <form>
      <FormGroup id={'formcontrol-reset'} label={'reset'}>
        <FormControl id={'reset'} onChange={action('reset changed')} type={'reset'} value={'Reset'}/>
      </FormGroup>
    </form>)
  .add('Form control - search', () =>
    <form>
      <FormGroup id={'formcontrol-search'} label={'search'}>
        <FormControl id={'search'} onChange={action('search changed')} type={'search'} value={'search'}/>
      </FormGroup>
    </form>)
  .add('Form control - submit', () =>
    <form>
      <FormGroup id={'formcontrol-submit'} label={'submit'}>
        <FormControl id={'submit'} onChange={action('submit changed')} type={'submit'} value={'submit'}/>
      </FormGroup>
    </form>)
  .add('Form control - tel', () =>
    <form>
      <FormGroup id={'formcontrol-tel'} label={'tel'}>
        <FormControl id={'tel'} onChange={action('tel changed')} type={'tel'} value={'111-111-1111'}/>
      </FormGroup>
    </form>)
  .add('Form control - text', () =>
    <form>
      <FormGroup id={'formcontrol-text'} label={'text'}>
        <FormControl id={'text'} onChange={action('text changed')} type={'text'} value={'This is text'}/>
      </FormGroup>
    </form>)
  .add('Form control - url', () =>
    <form>
      <FormGroup id={'formcontrol-url'} label={'url'}>
        <FormControl id={'url'} onChange={action('url changed')} type={'url'} value={'https://google.com'}/>
      </FormGroup>
    </form>)
  .add('Form control - week', () =>
    <form>
      <FormGroup id={'formcontrol-week'} label={'week'}>
        <FormControl id={'week'} onChange={action('week changed')} type={'week'} value={'2018-W24'}/>
      </FormGroup>
    </form>)
  .add('Form control - textarea', () =>
    <form>
      <FormGroup id={'formcontrol-week'} label={'week'}>
        <TextArea id={'week'} onChange={action('week changed')} type={'week'}
                  value={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu pretium sem, id fringilla tortor. Quisque et lectus lectus. Maecenas in magna quis odio efficitur pulvinar non sit amet justo. Mauris lorem orci, euismod et gravida id, dapibus quis justo. Vivamus quis congue leo. Integer vel risus blandit, lobortis nulla eu, feugiat orci. Vivamus ultrices nunc at eros pharetra volutpat. Morbi hendrerit nunc quis neque rhoncus ornare. Quisque congue malesuada turpis eget eleifend. Aliquam congue ex mauris, molestie malesuada velit ornare non. Aliquam feugiat, nunc quis pharetra volutpat, dui odio pharetra odio, at elementum leo quam non ipsum. Proin a enim nisl.'}/>
      </FormGroup>
    </form>)