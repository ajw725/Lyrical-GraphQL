import React, { useState } from 'react';
import { Link, hashHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import { ADD_SONG, GET_SONGS } from '../queries';

const SongCreate = () => {
  const [title, setTitle] = useState('');
  const [addSong] = useMutation(ADD_SONG);

  const onSubmit = (e) => {
    e.preventDefault();

    addSong({
      variables: { title },
      refetchQueries: [{ query: GET_SONGS }]
    }).then(() => {
      setTitle('');
      hashHistory.push('/');
    });
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <h1>Create Song</h1>
      <form onSubmit={onSubmit}>
        <label>Song Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
};


export default SongCreate;
