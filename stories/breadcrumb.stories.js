import {storiesOf} from '@storybook/react'

import React from 'react'
import Breadcrumb from '../src/bootstrap/components/Breadcrumb'
import BreadcrumbItem from '../src/bootstrap/components/BreadcrumbItem'


storiesOf('bootstrap/components/Breadcrumb', module)
  .add('One level', () => <Breadcrumb id={'one'}>
    <BreadcrumbItem id={'basic item'} active={true} page={true}>
      Home
    </BreadcrumbItem>
  </Breadcrumb>)
  .add('Two levels', () => <Breadcrumb id={'two'}>
    <BreadcrumbItem id={'item1'}>
      Home
    </BreadcrumbItem>
    <BreadcrumbItem id={'item2'} active={true} page={true}>
      Library
    </BreadcrumbItem>
  </Breadcrumb>)
  .add('Three levels', () => <Breadcrumb id={'three level'}>
    <BreadcrumbItem id={'one'}>
      Home
    </BreadcrumbItem>
    <BreadcrumbItem id={'two'}>
      Library
    </BreadcrumbItem>
    <BreadcrumbItem id={'three'} active={true} page={true}>
      Data
    </BreadcrumbItem>
  </Breadcrumb>)