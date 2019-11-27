import { lazy } from 'react';

const AppContainer = lazy(() => import('./AppContainer'))
const ScoreContainer = lazy(() => import('./ScoreContainer'))
const GameContainer = lazy(() => import('./GameContainer'))
const GameDivisionContainer = lazy(() => import('./GameDivisionContainer'))

export {
  AppContainer, ScoreContainer,
  GameContainer, GameDivisionContainer
}