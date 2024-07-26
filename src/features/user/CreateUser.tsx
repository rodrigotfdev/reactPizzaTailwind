import React, { useState, FormEvent } from 'react';

const CreateUser: React.FC = () => {
  const [username, setUsername] = useState<string>('');


  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>👋 Welcome! Please start by telling us your name:</p>

      <input
        type="text"
        placeholder="Your full name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      {username !== '' && (
        <div>
          <button type="submit">Start ordering</button>
        </div>
      )}
    </form>
  );
}

export default CreateUser;
