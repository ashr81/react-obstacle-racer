import { useState, useEffect } from 'react';

const useObstaclesPosition = () => {
  const [rowOne, updateRowOne] = useState([])
  const [rowTwo, updateRowTwo] = useState([])
  const [rowThree, updateRowThree] = useState([])
  const [score, updateScore] = useState(0)
  const [createBlockIntervalId, updateCreateBlockIntervalId] = useState(null)
  const [blockMovementIntervalId, updateBlockMovementIntervalId] = useState(null)

  useEffect(() => {
    if(!createBlockIntervalId) {
      const randomRowUpdate = [updateRowOne, updateRowTwo, updateRowThree]
      const intervalId = window.setInterval(() => {
        const first = Math.floor(Math.random()*3)
        const second = Math.floor(Math.random()*3)
        randomRowUpdate[first](row => {
          return row.reduce((acc, cur) => acc && cur > 50, true) ? [...row, -100] : row
        })
        randomRowUpdate[second](row => {
          return row.reduce((acc, cur) => acc && cur > 50, true) ? [...row, -100] : row
        })
      }, 2000)
      updateCreateBlockIntervalId(intervalId)
    }
    return () => createBlockIntervalId && window.clearInterval(createBlockIntervalId)
  }, [updateRowOne, updateRowTwo, updateRowThree, updateCreateBlockIntervalId, createBlockIntervalId])

  useEffect(() => {
    if(!blockMovementIntervalId) {
      const intervalId = window.setInterval(() => {
        let score = 0
        const sumGroup = (acc, cur) => {
          if(cur <= 600) {
            return [...acc, cur + 20]
          } else {
            score += 1
            return acc;
          }
        }
        updateRowOne(row => row.reduce(sumGroup, []))
        updateRowTwo(row => row.reduce(sumGroup, []))
        updateRowThree(row => row.reduce(sumGroup, []))
        updateScore(s => score + s)
      }, 100)
      updateBlockMovementIntervalId(intervalId)
    }
    return () => blockMovementIntervalId && window.clearInterval(blockMovementIntervalId)
  }, [updateBlockMovementIntervalId, blockMovementIntervalId])

  const stopGame = () => {
    window.clearInterval(createBlockIntervalId)
    window.clearInterval(blockMovementIntervalId)
  }

  const restartGame = () => {
    updateRowOne([])
    updateRowTwo([])
    updateRowThree([])
    updateScore(0)
    updateBlockMovementIntervalId(null)
    updateCreateBlockIntervalId(null)
  }

  return {
    rowOne,
    rowTwo,
    rowThree,
    score,
    stopGame,
    restartGame
  }
}

export default useObstaclesPosition;