import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'
import React from 'react'
import FormControl from '../src/bootstrap/forms/FormControl'
import InputGroup from '../src/bootstrap/inputGroup/InputGroup'


storiesOf('bootstrap/components/InputGroup', module)
  .addDecorator((story) => <div className="container">       {story()}     </div>)
  .add('On the left side', () =>
    <InputGroup prependText={'@'} id={'prepend'}>
      <FormControl id={'ontheleft'} onChange={action('on the left changed')} type={'text'} value={'value'}/>
    </InputGroup>)
  .add('On the right side', () =>
    <InputGroup appendText={'@example.com'} id={'append'}>
      <FormControl id={'ontheright'} onChange={action('on the right changed')} type={'text'} value={'value'}/>
    </InputGroup>)
  .add('On both sides', () =>
    <InputGroup appendText={'.00'} prependText={'$'} id={'append'}>
      <FormControl id={'onboth'} onChange={action('on both sides changed')} type={'text'} value={'value'}/>
    </InputGroup>)