import { useEffect, useState } from 'react';
import { socket } from '../socket';
import { ConnectionState } from './ConnectionState';

export function OpenComponent({ teamName }: { teamName: string }) {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [isOpen, setIsOpened] = useState(false);

  useEffect(() => {
    function onConnect() {
      setIsConnected(true);
    }

    function onDisconnect() {
      setIsConnected(false);
    }

    function onChangeStateEvent({ isOpen }: { isOpen: boolean }) {
      setIsOpened(isOpen);
      console.log('state changed to:', isOpen);
    }

    socket.emit('getState');

    socket.on('connect', onConnect);
    socket.on('disconnect', onDisconnect);
    socket.on('emitState', onChangeStateEvent);

    return () => {
      socket.off('connect', onConnect);
      socket.off('disconnect', onDisconnect);
      socket.off('emitState', onChangeStateEvent);
    };
  }, []);

  const tryToAnswer = (teamName: string) => {
    console.log('trying to answer', teamName)
    socket.emit('answer', { teamName });
  }

  return (
    <div 
      onClick={() => {
        if (isOpen) tryToAnswer(teamName);
      }}
      style={{ height: '100vh', width: '100vw', fontSize: 24 }}
    >
      <ConnectionState isConnected={ isConnected } />
      <p>Tiimi nimi: { teamName }</p>
      {
        isOpen ? 
          <div style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'green', width: '100vw', height: '100vh', zIndex: -1 }}></div> : 
          <div style={{ position: 'absolute', top: 0, left: 0, backgroundColor: 'red', width: '100vw', height: '100vh', zIndex: -1 }}></div>
      }
    </div>
  );
}

