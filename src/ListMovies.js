import React, { Component } from 'react';
import CardMovie from './CardMovie'

class ListMovies extends Component {
	render () {
      	const {movies, users, profiles} = this.props;
      
      	const usersMovies = Object.keys(movies).map((id) => {
        	let profFilter = profiles.filter((profile) => (
            	profile.favoriteMovieID === id
            ));
          	return {
              'movieId': id,
              'users': profFilter
            };
        }); 

        return (
          	<div>
          		<CardMovie 
          			movies={movies}
                    users={users}
					usersMovies={usersMovies}
	         	/>
  			</div>
        )
    }
}

export default ListMovies