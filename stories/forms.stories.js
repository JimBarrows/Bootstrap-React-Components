import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'

import React from 'react'
import FormCheck from '../src/bootstrap/forms/FormCheck'
import FormControl from '../src/bootstrap/forms/FormControl'
import FormGroup from '../src/bootstrap/forms/FormGroup'
import TextArea from '../src/bootstrap/forms/TextArea'

storiesOf('bootstrap/forms', module)
  .addDecorator((story) => <div className="container">
    <form>{story()}</form>
  </div>)
  .add('Form Group', () =>
    <FormGroup id={'formGroup'} label={'Form Group Test'}>
      <input type={'text'} className="form-control"/>
    </FormGroup>)
  .add('Required Form Group', () =>
    <FormGroup id={'formGroup'} label={'Required Form Group Test'} required={true}>
      <input type={'text'} className="form-control"/>
    </FormGroup>
  )
  .add('Form Group with error', () =>
    <FormGroup id={'formGroup'} label={'Required Form Group Test'} error={"This is not right"}>
      <input type={'text'} className="form-control"/>
    </FormGroup>)
  .add('Form control - commmon functionality', () =>
    <div>
      <FormGroup id={'formcontrol-required'} label={'Required'} required={true}>
        <FormControl id={'text'} onChange={action('text changed')} required={true} type={'text'}
                     value={'This is text'}/>
      </FormGroup>
      <FormGroup id={'formcontrol-disabled'} label={'Disabled'}>
        <FormControl id={'text'} onChange={action('text changed')} disabled={true} type={'text'}
                     value={'This is text'}/>
      </FormGroup>
      <FormGroup id={'formcontrol-small'} label={'Small'}>
        <FormControl id={'text'} onChange={action('text changed')} size={'small'} type={'text'} value={'This is text'}/>
      </FormGroup>
      <FormGroup id={'formcontrol-large'} label={'Large'}>
        <FormControl id={'text'} onChange={action('text changed')} size={'large'} type={'text'} value={'This is text'}/>
      </FormGroup>
      <FormGroup id={'formcontrol-readonly8'} label={'Read only'}>
        <FormControl id={'text'} onChange={action('text changed')} readOnly={true} type={'text'}
                     value={'This is text'}/>
      </FormGroup>
    </div>)
  .add('Form control - button', () =>

    <FormGroup id={'button'} label={'Button'}>
      <FormControl cssClass={'btn btn-info'} id={'formcontrol-button'} onChange={action('button pressed')}
                   type={'button'} value={'Click me'}/>
    </FormGroup>
  )
  .add('Form control - checkbox', () =>

    <FormGroup id={'formcontrol-checkbox'} label={'Checkbox'}>
      <FormControl id={'checkbox'} onChange={action('Checkbox clicked')} type={'checkbox'} value={'Check me'}/>
    </FormGroup>
  )
  .add('Form control - color', () =>

    <FormGroup id={'formcontrol-color'} label={'Color'}>
      <FormControl id={'color'} onChange={action('Color changed')} type={'color'} value={'#161821'}/>
    </FormGroup>
  )
  .add('Form control - date', () =>

    <FormGroup id={'formcontrol-date'} label={'Date'}>
      <FormControl id={'date'} onChange={action('Date changed')} type={'date'} value={'2018-01-01'}/>
    </FormGroup>
  )
  .add('Form control - datetime-local', () =>

    <FormGroup id={'formcontrol-datetime-local'} label={'datetime-local'}>
      <FormControl id={'datetime-local'} onChange={action('Datetime-local changed')} type={'datetime-local'}
                   value={''}/>
    </FormGroup>
  )
  .add('Form control - email', () =>

    <FormGroup id={'formcontrol-email'} label={'email'}>
      <FormControl id={'email'} onChange={action('Email changed')} type={'email'} value={''}/>
    </FormGroup>
  )
  .add('Form control - file', () =>

    <FormGroup id={'formcontrol-file'} label={'file'}>
      <FormControl id={'file'} onChange={action('File changed')} type={'file'} value={''}/>
    </FormGroup>
  )
  .add('Form control - hidden', () =>

    <FormGroup id={'formcontrol-hidden'} label={'hidden'}>
      <FormControl id={'hidden'} onChange={action('hidden changed')} type={'hidden'} value={''}/>
    </FormGroup>
  )
  .add('Form control - image', () =>

    <FormGroup id={'formcontrol-image'} label={'image'}>
      <FormControl id={'image'} onChange={action('image changed')} type={'image'} value={''}/>
    </FormGroup>
  )
  .add('Form control - month', () =>

    <FormGroup id={'formcontrol-month'} label={'month'}>
      <FormControl id={'month'} onChange={action('month changed')} type={'month'} value={'2018-05'}/>
    </FormGroup>
  )
  .add('Form control - number', () =>

    <FormGroup id={'formcontrol-number'} label={'number'}>
      <FormControl id={'number'} onChange={action('number changed')} type={'number'} value={3}/>
    </FormGroup>
  )
  .add('Form control - password', () =>

    <FormGroup id={'formcontrol-password'} label={'password'}>
      <FormControl id={'password'} onChange={action('password changed')} type={'password'}
                   value={'This is not a password'}/>
    </FormGroup>
  )
  .add('Form control - radio', () =>

    <FormGroup id={'formcontrol-radio'} label={'radio'}>
      <FormControl id={'radio'} onChange={action('radio changed')} type={'radio'} value={'value'}/>
    </FormGroup>
  )
  .add('Form control - range', () =>

    <FormGroup id={'formcontrol-range'} label={'range'}>
      <FormControl id={'range'} onChange={action('range changed')} type={'range'} value={'6'}/>
    </FormGroup>
  )
  .add('Form control - reset', () =>

    <FormGroup id={'formcontrol-reset'} label={'reset'}>
      <FormControl id={'reset'} onChange={action('reset changed')} type={'reset'} value={'Reset'}/>
    </FormGroup>
  )
  .add('Form control - search', () =>

    <FormGroup id={'formcontrol-search'} label={'search'}>
      <FormControl id={'search'} onChange={action('search changed')} type={'search'} value={'search'}/>
    </FormGroup>
  )
  .add('Form control - submit', () =>

    <FormGroup id={'formcontrol-submit'} label={'submit'}>
      <FormControl id={'submit'} onChange={action('submit changed')} type={'submit'} value={'submit'}/>
    </FormGroup>
  )
  .add('Form control - tel', () =>

    <FormGroup id={'formcontrol-tel'} label={'tel'}>
      <FormControl id={'tel'} onChange={action('tel changed')} type={'tel'} value={'111-111-1111'}/>
    </FormGroup>
  )
  .add('Form control - text', () =>

    <FormGroup id={'formcontrol-text'} label={'text'}>
      <FormControl id={'text'} onChange={action('text changed')} type={'text'} value={'This is text'}/>
    </FormGroup>
  )
  .add('Form control - url', () =>

    <FormGroup id={'formcontrol-url'} label={'url'}>
      <FormControl id={'url'} onChange={action('url changed')} type={'url'} value={'https://google.com'}/>
    </FormGroup>
  )
  .add('Form control - week', () =>

    <FormGroup id={'formcontrol-week'} label={'week'}>
      <FormControl id={'week'} onChange={action('week changed')} type={'week'} value={'2018-W24'}/>
    </FormGroup>
  )
  .add('Form control - textarea', () =>

    <FormGroup id={'formcontrol-week'} label={'week'}>
        <TextArea id={'week'} onChange={action('week changed')} type={'week'}
                  value={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu pretium sem, id fringilla tortor. Quisque et lectus lectus. Maecenas in magna quis odio efficitur pulvinar non sit amet justo. Mauris lorem orci, euismod et gravida id, dapibus quis justo. Vivamus quis congue leo. Integer vel risus blandit, lobortis nulla eu, feugiat orci. Vivamus ultrices nunc at eros pharetra volutpat. Morbi hendrerit nunc quis neque rhoncus ornare. Quisque congue malesuada turpis eget eleifend. Aliquam congue ex mauris, molestie malesuada velit ornare non. Aliquam feugiat, nunc quis pharetra volutpat, dui odio pharetra odio, at elementum leo quam non ipsum. Proin a enim nisl.'}/>
    </FormGroup>
  )
  .add('Groups of check boxes', () =>
    <FormGroup id={'group-of-checkboxes'} label={"Group of Checkboxes"}>
      <FormCheck id={'group-of-checkboxes'}>
        <FormControl id={'group-of-checkboxes1'} onChange={action('checkbox 1')} type={'checkbox'} value={'one'}/>
        <label className='form-check-label' for={'group-of-checkboxes1'}>One</label>
      </FormCheck>
      <FormCheck id={'group-of-checkboxes'}>
        <FormControl id={'group-of-checkboxes2'} onChange={action('checkbox 2')} type={'checkbox'} value={'two'}/>
        <label className='form-check-label' htmlFor={'group-of-checkboxes2'}>Two</label>
      </FormCheck>
    </FormGroup>)
  .add('Groups of radio buttons', () =>
    <FormGroup id={'group-of-radiobuttons'} label={"Group of Checkboxes"}>
      <FormCheck id={'group-of-radiobuttons'}>
        <FormControl id={'group-of-radiobuttons1'} onChange={action('radiobuttons 1')} type={'radio'} value={'one'}/>
        <label className='form-check-label' for={'group-of-radiobuttons1'}>One</label>
      </FormCheck>
      <FormCheck id={'group-of-radiobuttons'}>
        <FormControl id={'group-of-radiobuttons2'} onChange={action('radiobuttons 2')} type={'radio'} value={'two'}/>
        <label className='form-check-label' htmlFor={'group-of-radiobuttons2'}>Two</label>
      </FormCheck>
    </FormGroup>)
  .add('Inline Groups of check boxes', () =>
    <FormGroup id={'inline-group-of-checkboxes'} label={"Group of Checkboxes"}>
      <FormCheck id={'inline-group-of-checkboxes'} inline={true}>
        <FormControl id={'inline-group-of-checkboxes1'} onChange={action('inline-checkbox 1')} type={'checkbox'}
                     value={'one'}/>
        <label className='form-check-label' for={'inline-group-of-checkboxes1'}>One</label>
      </FormCheck>
      <FormCheck id={'inline-group-of-checkboxes'} inline={true}>
        <FormControl id={'inline-group-of-checkboxes2'} onChange={action('inline-checkbox 2')} type={'checkbox'}
                     value={'two'}/>
        <label className='form-check-label' htmlFor={'inline-group-of-checkboxes2'}>Two</label>
      </FormCheck>
    </FormGroup>)
  .add('Inline Groups of radio buttons', () =>
    <FormGroup id={'inline-group-of-radiobuttons'} label={"Group of Checkboxes"}>
      <FormCheck id={'inline-group-of-radiobuttons'} inline={true}>
        <FormControl id={'inline-group-of-radiobuttons1'} onChange={action('inline-radiobuttons 1')} type={'radio'}
                     value={'one'}/>
        <label className='form-check-label' for={'inline-group-of-radiobuttons1'}>One</label>
      </FormCheck>
      <FormCheck id={'inline-group-of-radiobuttons'} inline={true}>
        <FormControl id={'inline-group-of-radiobuttons2'} onChange={action('inline-radiobuttons 2')} type={'radio'}
                     value={'two'}/>
        <label className='form-check-label' htmlFor={'inline-group-of-radiobuttons2'}>Two</label>
      </FormCheck>
    </FormGroup>)