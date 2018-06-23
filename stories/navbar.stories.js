import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'
import React from 'react'

import Navbar from '../src/bootstrap/components/Navbar'
import NavbarItem from '../src/bootstrap/components/Navbar/Item'

storiesOf('bootstrap/components/Navbar', module)
  .addDecorator((story) => <div className="container">       {story()}     </div>)
  .add('Basic', () => <Navbar id={'basic'}>
    <NavbarItem id={'basic'} onClick={action('navbar basic 1')}>Link 1</NavbarItem>
  </Navbar>)
  .add('Brand', () => <Navbar id={'brand'} onBrandClick={action('Clicked on brand click')}
                              brandMessage={'This is a brand'}>
    <NavbarItem id={'brand'} onClick={action('brand 1')}>Link 1</NavbarItem>
  </Navbar>)
  .add('Dark Background', () => <Navbar id={'brand'} theme={'dark'} background={'dark'}
                                        onBrandClick={action('Clicked on brand click')}
                                        brandMessage={'This is a brand'}>
    <NavbarItem id={'brand'} onClick={action('brand 1')}>Link 1</NavbarItem>
  </Navbar>)
  .add('Primary Background', () => <Navbar id={'brand'} theme={'dark'} background={'primary'}
                                           onBrandClick={action('Clicked on brand click')}
                                           brandMessage={'This is a brand'}>
    <NavbarItem id={'brand'} onClick={action('brand 1')}>Link 1</NavbarItem>
  </Navbar>)
  .add('Fixed top', () => <Navbar id={'fixedTop'} position={'fixed-top'} theme={'dark'} background={'primary'}
                                  onBrandClick={action('Clicked on fixed top')} brandMessage={'This is a brand'}>
    <NavbarItem id={'fixedTop'} onClick={action('fixed top 1')}>Link 1</NavbarItem>
  </Navbar>)
  .add('Fixed bottom', () => <Navbar id={'fixedBottom'} position={'fixed-bottom'} theme={'dark'} background={'primary'}
                                     onBrandClick={action('Clicked on fixed bottom click')}
                                     brandMessage={'This is a brand'}>
    <NavbarItem id={'fixedBottom'} onClick={action('fixed bottom 1')}>Link 1</NavbarItem>
  </Navbar>)
  .add('Sticky top', () => <Navbar id={'stickyTop'} position={'sticky-top'} theme={'dark'} background={'primary'}
                                   onBrandClick={action('Clicked on stickyTop click')} brandMessage={'This is a brand'}>
    <NavbarItem id={'stickyTop'} onClick={action('fstickyTop 1')}>Link 1</NavbarItem>
  </Navbar>)

