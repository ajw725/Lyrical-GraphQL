import React, { useState } from 'react';

const SongCreate = () => {
  const [title, setTitle] = useState('');

  return (
    <div>
      <h1>Create Song</h1>
      <form>
        <label>Song Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </form>
    </div>
  )
};

export default SongCreate;
