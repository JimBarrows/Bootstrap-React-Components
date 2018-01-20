import React from 'react'
import ListInline from '../../src/ListInline'

export default class ListInlineComponent extends React.Component {

  render () {
    return (
      <div id='ListInlineComponent' >
        <ListInline id={'ListInlineComponent'} display={item => item} list={['fi', 'fi', 'fo', 'fum']} />
      </div >
    )
  }
}

ListInline.propTypes = {}

ListInline.defaultProps = {}