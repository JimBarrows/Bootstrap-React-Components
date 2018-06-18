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
  .add('3 Different sizes', () =>
    <div>
      <InputGroup appendText={'.00'} prependText={'$'} id={'append'} size={'small'}>
        <FormControl id={'onboth'} onChange={action('Small changed')} type={'text'} value={'value'}/>
      </InputGroup>
      <InputGroup appendText={'.00'} prependText={'$'} id={'append'}>
        <FormControl id={'onboth'} onChange={action('Medium/default changed')} type={'text'} value={'value'}/>
      </InputGroup>
      <InputGroup appendText={'.00'} prependText={'$'} id={'append'} size={'large'}>
        <FormControl id={'onboth'} onChange={action('Large changed')} type={'text'} value={'value'}/>
      </InputGroup>
    </div>)
  .add('Checkboxes', () => {
    let checkbox = <input id={'checkboxInputGroup'} onChange={action('checkbox input group checked')}
                          type={'checkbox'} value={'checkbox'}/>
    return <InputGroup id={'append'} prependText={checkbox}>
      <FormControl id={'onboth'} onChange={action('Small changed')} type={'text'} value={'value'}/>
    </InputGroup>
  })
  .add('Radio buttons', () => {
    let checkbox = <input id={'radioInputGroup'} onChange={action('radio input group checked')}
                          type={'radio'} value={'radio'}/>
    return <InputGroup id={'append'} prependText={checkbox}>
      <FormControl id={'onboth'} onChange={action('Small changed')} type={'text'} value={'value'}/>
    </InputGroup>
  })
  .add('Multiple inputs', () => {

    return <InputGroup id={'multipleInputs'} prependText={'First and Last Name'}>
      <FormControl id={'multipleInputs1'} onChange={action('multipleInputs1 changed')} type={'text'} value={'Bob'}/>
      <FormControl id={'multipleInputs2'} onChange={action('multipleInputs2 changed')} type={'text'} value={'Smith'}/>
    </InputGroup>
  })