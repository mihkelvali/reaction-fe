export function ConnectionState({ isConnected }: { isConnected: boolean }) {
  return <p>{ isConnected ? 'Ühendatud' : 'EI OLE ühendatud' }</p>;
}

