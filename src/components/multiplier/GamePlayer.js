import React, { useEffect, useState } from 'react';
import { GameContainer, GameDivisionContainer } from '../layouts';
import { ObstacleArt, PlayerArt } from '../artifacts';

const GamePlayer = () => {
  const [playerPostionX, updatePlayerPositionX] = useState(0)

  useEffect(() => {
    const onKeyPressEventHandler = (event) => {
      if(event.key === 'ArrowRight') {
        updatePlayerPositionX(positionX => {
          if(positionX < 200) return positionX + 100;
          else return positionX;
        })
      } else if(event.key === 'ArrowLeft') {
        updatePlayerPositionX(positionX => {
          if(positionX >= 100) return positionX - 100;
          else return positionX;
        })
      }
    }
    window.addEventListener('keydown', onKeyPressEventHandler)
  }, [])

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
      <PlayerArt positionX={playerPostionX}/>
    </GameContainer>
  )
}

export default GamePlayer;