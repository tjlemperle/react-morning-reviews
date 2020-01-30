import React, { Component } from 'react'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: [],
    }
  }

  render() {
    return <div className="List">I am the list component</div>
  }
}
export default List
