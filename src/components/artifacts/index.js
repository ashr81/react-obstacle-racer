import { lazy } from 'react';

const Flex = lazy(() => import('./Flex'));
const ObstacleArt = lazy(() => import('./ObstacleArt'));
const PlayerArt = lazy(() => import('./PlayerArt'));
const Text = lazy(() => import('./Text'));
const GameOverArt = lazy(() => import('./GameOverArt'))

export {
  Flex, ObstacleArt, PlayerArt, Text, GameOverArt
}