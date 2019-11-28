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
        {rowOne.map((row, i) => <ObstacleArt key={i} positionY={row}/>)}
      </GameDivisionContainer>
      <GameDivisionContainer>
        {rowTwo.map((row, i) => <ObstacleArt key={i} positionY={row}/>)}
      </GameDivisionContainer>
      <GameDivisionContainer>
        {rowThree.map((row, i) => <ObstacleArt key={i} positionY={row}/>)}
      </GameDivisionContainer>
      <PlayerArt positionX={playerPostionX}/>
    </GameContainer>
  )
}

export default GamePlayer;