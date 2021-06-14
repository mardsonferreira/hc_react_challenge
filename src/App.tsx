import React from 'react';
import Routes from './routes';

import GlobalStyle from './styles/global';
import { RepoContextProvider } from './context/repoContext';

function App() {
  return (
    <RepoContextProvider>
      <GlobalStyle />
      <Routes />
    </RepoContextProvider>
  );
}

export default App;
