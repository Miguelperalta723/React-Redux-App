import React from 'react'
import {connect} from 'react-redux'
import {getData} from '../actions'
import Loader from 'react-loader-spinner';
import {Movie} from './Movie'



const MoviesList = (props) => {
    return (
        <div>
            <h1>GHIBLI MOVIES</h1>

            <h2>{props.test}</h2>
            <button onClick={props.getData}>
                {props.isLoading ? 
                    <Loader
                    type="ThreeDots"
                    color="#00BFFF"
                    height="80"
                    width="80"
                />  : 'Gotta Catch Em All!'}
            </button>
            {props.movies &&
        props.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
        </div>
        
        
    )
}
const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        movies: state.movies
    }
}

export default connect(mapStateToProps, {getData})(MoviesList);