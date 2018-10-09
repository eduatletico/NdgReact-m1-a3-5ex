import React, { Component } from 'react';

class CardMovie extends Component {
	render () {
      const {movies, users, usersMovies} = this.props;
      
      const result = usersMovies.map((usMv) => {
        let obj;
      	if (usMv.users.length > 0) {
        	obj = {
              	id: usMv.movieId,
                title: movies[usMv.movieId].name,
              	users: usMv.users.map((user) => ( users[user.userID].name ))
            }
        } else {
          	obj = {
              	id: usMv.movieId,
              	title: movies[usMv.movieId].name,
              	users: []
            }
        }
        
        return obj;
      });
      
      return (
        <div>
        	{result.map((res) => (
        		<div key={`div${res.id}`}>
                    <h2 key={res.id}>{res.title}</h2>
					{(res.users.length>0)?
						<div>
                            <p>Liked By:</p>
                            <ul>
                            {res.users.map((user) => (
                                <li key={user}>{user}</li>
                            ))}
                            </ul>
						</div>
					:
						<p>None of the current users liked this movie</p>
					}
				</div>
            ))}
        </div>
      )
    }
}

export default CardMovie