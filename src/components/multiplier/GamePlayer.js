import React, { useContext, useEffect } from 'react';
import { GameContainer, GameDivisionContainer } from '../layouts';
import { ObstacleArt, PlayerArt } from '../artifacts';
import { usePlayerPositionX, useObstaclesPosition } from '../../customHooks';
import { ScoreContext } from '../../contexts';

const GamePlayer = () => {
  const  { playerPostionX } = usePlayerPositionX()
  const { rowOne, rowTwo, rowThree, score, stopGame } = useObstaclesPosition()
  const { updateScore } = useContext(ScoreContext)
  useEffect(() => {
    updateScore(score)
  }, [score, updateScore])

  useEffect(() => {
    const detectBlockInSameRow = (acc, cur) => {
      return acc || (cur >= 400 && cur < 500)
    }
    if(
      (playerPostionX === 0 && rowOne.reduce(detectBlockInSameRow, false)) ||
      (playerPostionX === 100 && rowTwo.reduce(detectBlockInSameRow, false)) ||
      (playerPostionX === 200 && rowThree.reduce(detectBlockInSameRow, false))
    ) {
      stopGame()
    }
  }, [playerPostionX, rowOne, rowThree, rowTwo, stopGame])

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