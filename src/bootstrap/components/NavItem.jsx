import PropTypes from 'prop-types'
import React from 'react'

export default class NavItem extends React.Component {

  static defaultProps = {
    state: 'enabled'
  }

  static propTypes = {
    id     : PropTypes.string.isRequired,
    label  : PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    state  : PropTypes.oneOf(['active', 'enabled', 'disabled'])
  }

  render() {
    let {id, label, onClick, state} = this.props
    let cssClasses                  = 'nav-link'
    if (state === 'active') {
      cssClasses += ' active'
    } else if (state === 'disabled') {
      cssClasses += ' disabled'
    }

    return (
      <li id={'NavItem-' + id} className={'nav-item'}>
        <a className={cssClasses} onClick={onClick}>{label}</a>
      </li>
    )
  }
}

