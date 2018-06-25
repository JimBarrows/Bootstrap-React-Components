import PropTypes from 'prop-types'
import React from 'react'
import Brand from './Brand'

export default class index extends React.Component {

  static defaultProps = {
    background: 'light',
    theme     : 'light'
  }

  static propTypes = {
    background  : PropTypes.oneOf(['dark', 'light', 'primary']),
    brandMessage: PropTypes.string,
    children    : PropTypes.node,
    id          : PropTypes.string.isRequired,
    onBrandClick: PropTypes.func,
    position    : PropTypes.oneOf(['fixed-top, fixed-bottom, sticky-top']),
    theme       : PropTypes.oneOf(['light', 'dark']),
  }

  render() {
    let {background, brandMessage, children, id, onBrandClick, position, theme} = this.props
    let className                                                               = 'navbar navbar-expand-lg'
    switch (background) {
      case 'dark':
        className += ' bg-dark'
        break
      case 'light':
        className += ' bg-light'
        break
      case 'primary':
        className += ' bg-primary'
        break
    }
    switch (position) {
      case 'fixed-top':
        className += ' fixed-top'
        break
      case 'fixed-bottom':
        className += ' fixed-bottom'
        break
      case 'sticky-top':
        className += ' sticky-top'
        break
    }
    switch (theme) {
      case 'dark':
        className += ' navbar-dark'
        break
      case 'light':
        className += ' navbar-light'
    }
    let brand = brandMessage ?
      <Brand onClick={onBrandClick} id={'brand'}>{brandMessage}</Brand> : ''
    return (
      <nav id={'Navbar-' + id} className={className}>
        {brand}
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            {children}
          </ul>
        </div>
      </nav>
    )
  }
}

