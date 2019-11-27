import { lazy } from 'react';

const ObstacleArt = lazy(() => import('./ObstacleArt'));
const PlayerArt = lazy(() => import('./PlayerArt'));

export {
  ObstacleArt, PlayerArt
}