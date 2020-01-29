import React, { Component } from 'react'
import ListItem from './ListItem'
import movies from '../data/movies.json'

class List extends Component {
  constructor(props) {
    super(props)

    this.state = {
      movies: movies,
    }
  }

  render() {
    const moviesMap = movies.map(movie => {
      return <ListItem key={movie.id} movie={movie} />
    })
    return <div className="List">{moviesMap}</div>
  }
}
export default List
