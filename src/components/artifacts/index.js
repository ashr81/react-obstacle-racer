import { lazy } from 'react';

const ObstacleArt = lazy(() => import('./ObstacleArt'));
const PlayerArt = lazy(() => import('./PlayerArt'));
const Text = lazy(() => import('./Text'));

export {
  ObstacleArt, PlayerArt, Text
}