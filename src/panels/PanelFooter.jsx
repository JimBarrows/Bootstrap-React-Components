import PropTypes from 'prop-types'
import React from 'react'

export default class PanelFooter extends React.Component {
  render () {
    return (
      <div id={'PanelFooterComponent_' + this.props.id} className={'panel-footer'} >
        {this.props.children}
      </div >
    )
  }
}

PanelFooter.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired
}

PanelFooter.defaultProps = {}