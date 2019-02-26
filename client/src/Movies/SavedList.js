import React, { Component } from 'react';

import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

export default class SavedList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="saved-list">
        <h3>Saved Movies:</h3>
        {this.props.list.map(movie => (
          <NavLink 
          to={`/movies/${movie.id}`}
          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}
          >
            <span className="saved-movie">{movie.title}</span>
          </NavLink>
        ))}
        <Link exact to={`/`} className="home-button">Home</Link>
      </div>
    );
  }
}

// Saved list maps over each movie, makes a link to the page with that id