import React from 'react'
import {connect} from 'react-redux';

const MovieDetalis = (props) => {
  if (!props.selectedMovie){
    return (
        <div className='details-container'style={{width: '70%', height: '100%'}}>
            <h2>Movie</h2>
            <div className='properties'>
                <p>Selected Movie</p>
            </div>
        </div>
    )
  }
  else {
    return (
        <div className='details-container'style={{width: '70%', height: '100%'}}>
            <h2>Movie</h2>
            <div className='properties'>
                <p>Title: {props.selectedMovie.title}</p>
                <p>Release Date: {props.selectedMovie.releaseDate}</p>
                <p>Rating: {props.selectedMovie.rating}</p>
            </div>
        </div>
    )
  }


}


const mapStateToProps = (state) => {
    return {
        selectedMovie: state.selectedMovie
    }
}

export default connect(mapStateToProps)(MovieDetalis)