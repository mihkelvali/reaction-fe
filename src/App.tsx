import { useState } from 'react';
import { MyForm } from './components/MyForm';
import { OpenComponent } from './components/OpenComponent';

export default function App() {
  const [teamName, setTeamName] = useState<string | null>(null);

  return (
    <div className="App">
      { !teamName ? 
        <MyForm setTeamName={setTeamName} /> :
        <OpenComponent teamName={teamName} />
      }
    </div>
  );
}

