import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import React from 'react'
import DateRangeFormGroup from '../src/formgroups/DateRangeFormGroup'


storiesOf('Form Groups/Date Range', module)
  .addDecorator((story) => <div className="container">{<form>{story()}</form>}</div>)
  .add('Default', () => <DateRangeFormGroup id={'Default'} label='Date' onChange={action('default clicked')}
                                            fromDate={'2018-01-01'} thruDate={'2019-01-01'}/>)
  .add('No label', () => <DateRangeFormGroup id={'No label'} onChange={action('default clicked')} value={''}
                                             fromDate={'2018-01-01'} thruDate={'2019-01-01'}/>)
  .add('Disabled', () => <DateRangeFormGroup disabled={true} id={'Disabled'} label={'Date'} onChange={action('Date')}
                                             value={'checkbox'} fromDate={'2018-01-01'} thruDate={'2019-01-01'}/>)
  .add('Invalid', () => <DateRangeFormGroup validationMessage={'This isn\'t right'} valid={false} id={'Invalid'}
                                            label={'Date'} onChange={action('Date')} value={'checkbox'}
                                            fromDate={'2018-01-01'} thruDate={'2019-01-01'}/>)
  .add('Valid', () => <DateRangeFormGroup validationMessage={'This is right'} valid={true} id={'Valid'} label={'Date'}
                                          onChange={action('Date')} value={'checkbox'} fromDate={'2018-01-01'}
                                          thruDate={'2019-01-01'}/>)
  .add('Required', () => <DateRangeFormGroup id={'Required'} label={'Date'} onChange={action('Date')} required={true}
                                             value={'checkbox'} fromDate={'2018-01-01'} thruDate={'2019-01-01'}/>)
  .add('Required -  no label', () => <DateRangeFormGroup id={'Required'} onChange={action('Date')} required={true}
                                                         value={'checkbox'} fromDate={'2018-01-01'}
                                                         thruDate={'2019-01-01'}/>)