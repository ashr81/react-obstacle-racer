import React from 'react';
import { GameContainer, GameDivisionContainer } from '../layouts';
import { ObstacleArt, PlayerArt } from '../artifacts';

const GamePlayer = () => {
  return (
    <GameContainer>
      <GameDivisionContainer>
        <ObstacleArt positionY={100}/>
        <ObstacleArt positionY={400}/>
        <ObstacleArt positionY={300}/>
      </GameDivisionContainer>
      <GameDivisionContainer>
      <ObstacleArt positionY={100}/>
        <ObstacleArt positionY={400}/>
        <ObstacleArt positionY={300}/>
      </GameDivisionContainer>
      <GameDivisionContainer>
        <ObstacleArt positionY={100}/>
        <ObstacleArt positionY={400}/>
        <ObstacleArt positionY={300}/>
      </GameDivisionContainer>
      <PlayerArt positionX={100}/>
    </GameContainer>
  )
}

export default GamePlayer;