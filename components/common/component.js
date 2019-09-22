class Component {
  constructor(props = {}) {
    this.state = {}
    this.props = props
    this._callbacks = []
  }

  setState(newState) {
    if (!newState) throw new Error('State was not provided')

    this.state = Object.assign({}, this.state, newState)
  }

  subscribe(name, callback) {
    if (!name) throw new Error('Name for callback was not provided')
    if (!callback) throw new Error('Callback was not provided')

    this._callbacks[name] = this._callbacks[name] || []
    this._callbacks[name].push(callback)
  }

  dispatch(newState, name, data) {
    if (!name) throw new Error('Name for callback was not provided')
    if (!this._callbacks[name]) throw new Error('Callback does not exist')

    this.setState(newState)
    this._callbacks[name].map(callback => callback(data))
  }
}

export default Component
