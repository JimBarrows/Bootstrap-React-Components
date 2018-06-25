import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import React from 'react'
import SearchFormGroup from '../src/formgroups/SearchFormGroup'


storiesOf('Form Groups/Search', module)
  .addDecorator((story) => <div className="container">{<form>{story()}</form>}</div>)
  .add('Default', () => <SearchFormGroup id={'Default'} label='Search' onChange={action('default clicked')} value={''}/>)
  .add('No label', () => <SearchFormGroup id={'No label'} onChange={action('default clicked')} value={''}/>)
  .add('Disabled', () => <SearchFormGroup disabled={true} id={'Disabled'} label={'Search'} onChange={action('Search')} value={''}/>)
  .add('Invalid', () => <SearchFormGroup validationMessage={'This isn\'t right'} valid={false} id={'Invalid'} label={'Search'} onChange={action('Search')} value={''}/>)
  .add('Valid', () => <SearchFormGroup validationMessage={'This is right'} valid={true} id={'Valid'} label={'Search'} onChange={action('Search')} value={''}/>)
  .add('Required', () => <SearchFormGroup id={'Required'} label={'Search'} onChange={action('Search')} required={true} value={''}/>)
  .add('Required -  no label', () => <SearchFormGroup id={'Required'} onChange={action('Search')} required={true} value={''}/>)