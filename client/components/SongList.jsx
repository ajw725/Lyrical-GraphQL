import React from 'react';
import { Link } from 'react-router';
import { gql, useQuery } from '@apollo/client';

const GET_SONGS = gql`
  query {
    songs {
      id
      title
    }
  }
`;

const SongList = () => {
  const { loading, error, data } = useQuery(GET_SONGS);

  const renderSongs = () => {
    if (loading || !data || !data.songs) {
      return [];
    }

    return data.songs.map((song) => {
      return <li key={song.id} className="collection-item">{song.title}</li>
    });
  };

  return (
    <div>
      <h1>Song List</h1>
      <ul className="collection">{renderSongs()}</ul>
      <div>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  )
};


export default SongList;