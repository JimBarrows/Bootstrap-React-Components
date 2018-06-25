import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'
import React from 'react'
import Nav from '../src/bootstrap/components/Nav'
import NavItem from '../src/bootstrap/components/Nav/NavItem'


storiesOf('bootstrap/components/Navs', module)
  .addDecorator((story) => <div className="container">       {story()}     </div>)
  .add('Base', () => <Nav id={'base-nav'}>
    <NavItem id={'base-nav-item1'} label={'Nav 1'} onClick={action('base nav 1 clicked')}/>
    <NavItem id={'base-nav-item2'} label={'Nav 2'} onClick={action('base nav 2 clicked')}/>
  </Nav>)
  .add('Active', () => <Nav id={'active-nav'}>
    <NavItem id={'active-nav-item1'} label={'Nav 1'} state='active' onClick={action('active nav 1 clicked')}/>
    <NavItem id={'active-nav-item2'} label={'Nav 2'} onClick={action('active nav 2 clicked')}/>
    <NavItem id={'active-nav-item3'} label={'Nav 3'} onClick={action('active nav 3 clicked')}/>
  </Nav>)
  .add('Disabled', () => <Nav id={'disabled-nav'}>
    <NavItem id={'disabled-nav-item1'} label={'Nav 1'} state='disabled' onClick={action('disabled nav 1 clicked')}/>
    <NavItem id={'disabled-nav-item2'} label={'Nav 2'} onClick={action('disabled nav 2 clicked')}/>
    <NavItem id={'disabled-nav-item3'} label={'Nav 3'} onClick={action('disabled nav 3 clicked')}/>
  </Nav>)
  .add('Centered', () => <Nav id={'centered-nav'} position={'center'}>
    <NavItem id={'centered-nav-item1'} label={'Nav 1'} onClick={action('centered nav 1 clicked')} state='active'/>
    <NavItem id={'centered-nav-item2'} label={'Nav 2'} onClick={action('centered nav 2 clicked')} state='disabled'/>
    <NavItem id={'centered-nav-item3'} label={'Nav 3'} onClick={action('centered nav 3 clicked')}/>
  </Nav>)
  .add('Right Aligned', () => <Nav id={'right-nav'} position={'right'}>
    <NavItem id={'right-nav-item1'} label={'Nav 1'} onClick={action('right nav 1 clicked')} state='active'/>
    <NavItem id={'right-nav-item2'} label={'Nav 2'} onClick={action('right nav 2 clicked')} state='disabled'/>
    <NavItem id={'right-nav-item3'} label={'Nav 3'} onClick={action('right nav 3 clicked')}/>
  </Nav>)
  .add('Vertical Aligned', () => <Nav id={'vertical-nav'} position={'vertical'}>
    <NavItem id={'vertical-nav-item1'} label={'Nav 1'} onClick={action('vertical nav 1 clicked')} state='active'/>
    <NavItem id={'vertical-nav-item2'} label={'Nav 2'} onClick={action('vertical nav 2 clicked')} state='disabled'/>
    <NavItem id={'vertical-nav-item3'} label={'Nav 3'} onClick={action('vertical nav 3 clicked')}/>
  </Nav>)
  .add('Tabs', () => <Nav id={'tabs-nav'} look={'tabs'}>
    <NavItem id={'tabs-nav-item1'} label={'Nav 1'} onClick={action('tabs nav 1 clicked')} state='active'/>
    <NavItem id={'tabs-nav-item2'} label={'Nav 2'} onClick={action('tabs nav 2 clicked')} state='disabled'/>
    <NavItem id={'tabs-nav-item3'} label={'Nav 3'} onClick={action('tabs nav 3 clicked')}/>
  </Nav>)
  .add('Pills', () => <Nav id={'pills-nav'} look={'pills'}>
    <NavItem id={'pills-nav-item1'} label={'Nav 1'} onClick={action('pills nav 1 clicked')} state='active'/>
    <NavItem id={'pills-nav-item2'} label={'Nav 2'} onClick={action('pills nav 2 clicked')} state='disabled'/>
    <NavItem id={'pills-nav-item3'} label={'Nav 3'} onClick={action('pills nav 3 clicked')}/>
  </Nav>)
  .add('Fill', () => <Nav id={'fill-nav'} look={'pills'} position={'fill'}>
    <NavItem id={'fill-nav-item1'} label={'Nav 1'} onClick={action('fill nav 1 clicked')} state='active'/>
    <NavItem id={'fill-nav-item2'} label={'Nav 2'} onClick={action('fill nav 2 clicked')} state='disabled'/>
    <NavItem id={'fill-nav-item3'} label={'Nav 3'} onClick={action('fill nav 3 clicked')}/>
  </Nav>)
  .add('Justified', () => <Nav id={'justify-nav'} look={'pills'} position={'justify'}>
    <NavItem id={'justify-nav-item1'} label={'Nav 1'} onClick={action('justify nav 1 clicked')} state='active'/>
    <NavItem id={'justify-nav-item2'} label={'Nav 2'} onClick={action('justify nav 2 clicked')} state='disabled'/>
    <NavItem id={'justify-nav-item3'} label={'Nav 3'} onClick={action('justify nav 3 clicked')}/>
  </Nav>)