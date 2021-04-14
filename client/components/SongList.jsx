import React from 'react';
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
    </div>
  )
};


export default SongList;