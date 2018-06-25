import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react'

import React from 'react'
import Pagination from '../src/bootstrap/components/Pagination'
import PaginationItem from '../src/bootstrap/components/Pagination/PaginationItem'


storiesOf('bootstrap/components/Pagination', module)
  .addDecorator((story) => <div className="container">       {story()}     </div>)
  .add('Default', () => <Pagination id={'default'} onNext={action('default on next')}
                                    onPrevious={action('default on previous')}>
    <PaginationItem id={'default1'} onClick={action('pagination default 1')}>1</PaginationItem>
    <PaginationItem id={'default2'} onClick={action('pagination default 2')}>2</PaginationItem>
    <PaginationItem id={'default3'} onClick={action('pagination default 3')}>3</PaginationItem>
  </Pagination>)
  .add('States', () => <Pagination id={'states'} onNext={action('states on next')}
                                   onPrevious={action('states on previous')}>
    <PaginationItem id={'states1'} onClick={action('pagination states 1')} state={'active'}>1</PaginationItem>
    <PaginationItem id={'states2'} onClick={action('pagination states 2')} state={'disabled'}>2</PaginationItem>
    <PaginationItem id={'states3'} onClick={action('pagination states 3')}>3</PaginationItem>
  </Pagination>)
  .add('Size - small', () => <Pagination id={'size'} size={'small'} onNext={action('size on next')}
                                         onPrevious={action('size on previous')}>
    <PaginationItem id={'size1'} onClick={action('pagination size 1')}>1</PaginationItem>
    <PaginationItem id={'size2'} onClick={action('pagination size 2')}>2</PaginationItem>
    <PaginationItem id={'size3'} onClick={action('pagination size 3')}>3</PaginationItem>
  </Pagination>)
  .add('Size - large', () => <Pagination id={'large'} size={'large'} onNext={action('large on next')}
                                         onPrevious={action('large on previous')}>
    <PaginationItem id={'large1'} onClick={action('pagination large 1')}>1</PaginationItem>
    <PaginationItem id={'large2'} onClick={action('pagination large 2')}>2</PaginationItem>
    <PaginationItem id={'large3'} onClick={action('pagination large 3')}>3</PaginationItem>
  </Pagination>)
  .add('Alignment - center', () => <Pagination id={'alignmentCenter'} alignment={'center'}
                                               onNext={action('alignment center on next')}
                                               onPrevious={action('alignment right on previous')}>
    <PaginationItem id={'alignmentCenter1'} onClick={action('pagination alignment center 1')}>1</PaginationItem>
    <PaginationItem id={'alignmentCenter2'} onClick={action('pagination alignment center 2')}>2</PaginationItem>
    <PaginationItem id={'alignmentCenter3'} onClick={action('pagination alignment center 3')}>3</PaginationItem>
  </Pagination>)
  .add('Alignment - right', () => <Pagination id={'alignmentRight'} alignment={'right'}
                                              onNext={action('alignment right on next')}
                                              onPrevious={action('alignment right on previous')}>
    <PaginationItem id={'alignmentright1'} onClick={action('pagination alignment right 1')}>1</PaginationItem>
    <PaginationItem id={'alignmentright2'} onClick={action('pagination alignment right 2')}>2</PaginationItem>
    <PaginationItem id={'alignmentright3'} onClick={action('pagination alignment right 3')}>3</PaginationItem>
  </Pagination>)