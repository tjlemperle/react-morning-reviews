import React, { Component } from 'react'
import './form.css'

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      year: '',
      posterImg: '',
    }

    this.handleAdd = this.handleAdd.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleAdd(e) {
    e.preventDefault()
    this.props.addMovie(this.state.title, this.state.year, this.state.posterImg)
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  render() {
    return (
      <form onSubmit={this.handleAdd} className="Form">
        <input name="title" onChange={this.handleChange} placeholder="Title" />
        <input name="year" onChange={this.handleChange} placeholder="Year" />
        <input
          name="posterImg"
          onChange={this.handleChange}
          placeholder="Poster url"
        />
        <button type="submit">Add Movie</button>
      </form>
    )
  }
}
export default Form
