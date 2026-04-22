import React from 'react';
import Board from './components/Board/Board';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { AppContainer } from './App.styles';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AppContainer>
        <Board />
      </AppContainer>
    </ErrorBoundary>
  );
};

export default App;