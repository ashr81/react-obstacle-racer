import React, { Suspense, useState } from 'react';
import theme from './theme';
import { ThemeProvider } from 'styled-components';
import { AppContainer, ScoreContainer } from './components/layouts';
import { GamePlayer } from './components/multiplier';
import { Text } from './components/artifacts';
import { ScoreContext } from './contexts';

function App() {
  const [score, updateScore] = useState(0)
  return (
    <ScoreContext.Provider value={{
      score,
      updateScore
    }}>
      <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading...,</div>}>
          <AppContainer>
            <ScoreContainer flexDirection='column'>
              <Text bolder fontSize='lg'>Score: {score}</Text>
            </ScoreContainer>
            <GamePlayer />
          </AppContainer>
        </Suspense>
      </ThemeProvider>
    </ScoreContext.Provider>
  );
}

export default App;
