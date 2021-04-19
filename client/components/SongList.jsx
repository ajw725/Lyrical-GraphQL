import React from 'react';
import { Link } from 'react-router';
import { useQuery, useMutation } from '@apollo/client';
import { GET_SONGS, DELETE_SONG } from '../queries'

const SongList = () => {
  const { loading, error, data } = useQuery(GET_SONGS);
  const [deleteSong] = useMutation(DELETE_SONG);

  const handleDelete = (songId) => {
    if (!confirm('Are you sure you want to delete this song?')) {
      return;
    }

    deleteSong({
      variables: { id: songId },
      refetchQueries: [{ query: GET_SONGS }]
    });
  };

  const renderSongs = () => {
    if (loading || !data || !data.songs) {
      return [];
    }

    return data.songs.map(({ id, title }) => {
      return (
        <li key={id} className="collection-item">
          <span>{title}</span>
          <i className="material-icons" onClick={() => handleDelete(id)}>delete</i>
        </li>
      );
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