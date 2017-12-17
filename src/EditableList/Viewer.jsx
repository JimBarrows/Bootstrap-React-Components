import PropTypes from 'prop-types'
import React from 'react'
import ButtonGroup from '../ButtonGroup'
import EditButton from '../EditButton'
import RemoveButton from '../RemoveButton'

class Viewer extends React.Component {
  render () {
    let {body, header, id, onEditButtonClick, onRemoveButtonClick} = this.props
    let thisId = 'list_group_item_' + id
    return (
      <div id={thisId} className='list-group-item ' >
        {header
          ? <h4 id={thisId + '_header'} className='list-group-item-heading' >
            {header}
            <ButtonGroup id={thisId} >
              <EditButton id={thisId} onClick={onEditButtonClick} />
              <RemoveButton id={thisId} onClick={onRemoveButtonClick} />
            </ButtonGroup >
          </h4 >
          : ''}
        <div className='list-group-item-text' id={'list_group_item_text' + id} >{body}</div >
      </div >
    )
  }
}

Viewer.propTypes = {
  body: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onEditButtonClick: PropTypes.func.isRequired,
  onRemoveButtonClick: PropTypes.func.isRequired
}
export default Viewer
