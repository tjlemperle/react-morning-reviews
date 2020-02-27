import React, {Component} from 'react'
import movies from '../data/movies.json'
import ListItem from './ListItem'

class List extends Component{
    constructor(props){
        super(props)
        
        this.state = {
            movies: movies
        }
    }

    render(){
        console.log(this.state.moviest)
        const moviesMap = this.state.movies.map(movie => {
            return <ListItem key={movie.id} movie={movie} />
        })
        return(
            <div className='List'>{moviesMap}</div>
        )
    }
}

export default List;