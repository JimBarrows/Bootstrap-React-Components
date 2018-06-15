import PropTypes from 'prop-types'
import React from 'react'

export default class ListGroup extends React.Component {

  render () {
    return (
      <div id={this.props.id + '_list_group'} className='list-group' >
        {
          this.props.items.map(
            (item, index) =>
              <div id={item.id + '_list_group_item'} key={index} className='list-group-item' >
                <div id={item.id + '_list_group_item_heading'} className='list-group-item-heading' >
                  {this.props.itemHeading(item)}
                </div >
                <div id={item.id + '_list_group_item_text'} className='list-group-item-text' >
                  {this.props.itemText(item)}
                </div >
              </div >
          )
        }
      </div >
    )
  }
}

ListGroup.propTypes = {
  id: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  itemHeading: PropTypes.func.isRequired,
  itemText: PropTypes.func.isRequired
}
