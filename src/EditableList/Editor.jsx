import PropTypes from 'prop-types'
import React from 'react'

class Editor extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current: props.item
    }
    this.onCancel = this.onCancel.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    let {item} = nextProps
    this.setState(
      {
        current: item
      }
    )
  }

  onCancel (e) {
    e.preventDefault()
    this.setState(
      {
        current: this.props.item
      }
    )
    if (this.props.onCancel) {
      this.props.onCancel(e)
    }
  }

  onChange (e) {
    this.setState(
      {
        current: this.props.onChange(e, this.state.current)
      }
    )
  }

  onSubmit (e) {
    e.preventDefault()
    this.props.onSubmit(this.state.current)
  }

  render () {
    let {id, formElements} = this.props

    let childrenWithProps = React.Children.map(formElements(this.state.current),
                                               (child) => React.cloneElement(child, {
                                                 onChange: this.onChange
                                               })
    )

    return (
      <form id='defaultForm' onSubmit={this.onSubmit} >
        {childrenWithProps}
        <button id={'submit_form_' + id} type='submit' className='btn btn-success' >Save</button >
        <button id={'cancel_form_' + id} onClick={this.onCancel} className='btn btn-default' type='button' >Cancel
        </button >
      </form >
    )
  }
}

Editor.propTypes = {
  formElements: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
  item: PropTypes.object.isRequired,
  onCancel: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default Editor
