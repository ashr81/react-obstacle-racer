import React from 'react';
import { GameContainer, GameDivisionContainer } from '../layouts';
import { ObstacleArt, PlayerArt } from '../artifacts';
import { usePlayerPositionX, useObstaclesPosition } from '../../customHooks';

const GamePlayer = () => {
  const  { playerPostionX } = usePlayerPositionX()
  const { rowOne, rowTwo, rowThree } = useObstaclesPosition()

  return (
    <GameContainer>
      <GameDivisionContainer>
        {rowOne.map((top, i) => <ObstacleArt key={i} style={{top}}/>)}
      </GameDivisionContainer>
      <GameDivisionContainer>
        {rowTwo.map((top, i) => <ObstacleArt key={i} style={{top}}/>)}
      </GameDivisionContainer>
      <GameDivisionContainer>
        {rowThree.map((top, i) => <ObstacleArt key={i} style={{top}}/>)}
      </GameDivisionContainer>
      <PlayerArt positionX={playerPostionX}/>
    </GameContainer>
  )
}

export default GamePlayer;