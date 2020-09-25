import { lazy } from 'react';

const ObstacleArt = lazy(() => import('./ObstacleArt'));
const PlayerArt = lazy(() => import('./PlayerArt'));
const Flex = lazy(() => import('./Flex'));
const Text = lazy(() => import('./Text'));
const GameOverArt = lazy(() => import('./GameOverArt'))

export {
  ObstacleArt, PlayerArt, Text, GameOverArt, Flex
}