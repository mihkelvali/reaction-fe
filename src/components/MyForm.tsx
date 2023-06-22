import React, { useState } from 'react';

export function MyForm({ setTeamName }: { setTeamName: (teamName: string) => void }) {
  const [value, setValue] = useState('');

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setTeamName(value);
  }

  return (
    <form onSubmit={ onSubmit } style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh', fontSize: 24, gap: 12 }}>

      <label htmlFor="teamName">Sisesta tiimi nimi</label>
      <input id="teamName" type="text" style={{ fontSize: 24 }} onChange={ e => setValue(e.target.value) } />
      <button type="submit">Salvesta</button>
    </form>
  );
}

