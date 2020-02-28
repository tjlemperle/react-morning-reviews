import React, {Component} from 'react'

class Form extends Component{
    constructor(props){
        super(props);

        this.state = {
            title: '',
            year: '', 
            posterImg: ''
        }
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleAdd(e){
        e.preventDefault()
        this.props.addMovie(this.state.title, this.state.year, this.state.posterImg)
    }

    render(){
        return (
            <form onSubmit={this.handleAdd} className='Form'>
                <input 
                    name='title' 
                    placeholder='put yo title here' 
                    onChange={e =>this.handleChange(e)} 
                />
                <input 
                    name='year' 
                    placeholder='Year' 
                    onChange={e =>this.handleChange(e)} 
                />
                <input 
                    name='posterImg' 
                    placeholder='Poster URL' 
                    onChange={e =>this.handleChange(e)} 
                />
                <button type='submit'>Add Movie</button>
            </form>
        )
    }
}

export default Form