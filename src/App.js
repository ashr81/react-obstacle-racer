import React, { Suspense } from 'react';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { AppContainer, ScoreContainer } from './components/layouts';
import { GamePlayer } from './components/multiplier';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<div>Loading...,</div>}>
        <AppContainer>
          <ScoreContainer>24</ScoreContainer>
          <GamePlayer />
        </AppContainer>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
