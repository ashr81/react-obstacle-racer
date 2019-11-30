import React, { useContext, useEffect, useState } from 'react';
import { GameContainer, GameDivisionContainer } from '../layouts';
import { ObstacleArt, PlayerArt, GameOverArt } from '../artifacts';
import { usePlayerPositionX, useObstaclesPosition } from '../../customHooks';
import { ScoreContext } from '../../contexts';

const GamePlayer = () => {
  const [openModal, updateOpenModal] = useState(false)
  const  { playerPostionX } = usePlayerPositionX()
  const { rowOne, rowTwo, rowThree, score, stopGame, restartGame } = useObstaclesPosition()
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
      updateOpenModal(true)
    }
  }, [playerPostionX, rowOne, rowThree, rowTwo, stopGame])

  const onRestart = () => {
    restartGame()
    updateOpenModal(false)
  }

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
      {openModal && <GameOverArt score={score} onRestart={onRestart}/>}
    </GameContainer>
  )
}

export default GamePlayer;