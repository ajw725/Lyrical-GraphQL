import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag'; // imported by apollo-client

const SongList = ({ data }) => {
  const renderSongs = () => {
    if (!data || data.loading || !data.songs) {
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

const songsQuery = gql`
  query {
    songs {
      id
      title
    }
  }
`;

export default graphql(songsQuery)(SongList);