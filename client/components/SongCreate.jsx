import React, { useState } from 'react';
import { Link, hashHistory } from 'react-router';
import { gql, useMutation } from '@apollo/client';

const ADD_SONG = gql`
  mutation AddSong($title: String) {
    addSong(title: $title) {
      id
      title
    }
  }
`;

const SongCreate = () => {
  const [title, setTitle] = useState('');
  const [addSong, { data }] = useMutation(ADD_SONG);

  const onSubmit = (e) => {
    e.preventDefault();

    const song = { title };
    addSong({ variables: { title }}).then(() => {
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
