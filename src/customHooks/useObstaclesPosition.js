import { useState, useEffect } from 'react';

const useObstaclesPosition = () => {
  const [rowOne, updateRowOne] = useState([])
  const [rowTwo, updateRowTwo] = useState([])
  const [rowThree, updateRowThree] = useState([])
  const [score, updateScore] = useState(0)
  const [createBlockIntervalId, updateCreateBlockIntervalId] = useState(null)
  const [blockMovementIntervalId, updateBlockMovementIntervalId] = useState(null)

  useEffect(() => {
    let intervalId
    if(!intervalId) {
      const randomRowUpdate = [updateRowOne, updateRowTwo, updateRowThree]
      intervalId = window.setInterval(() => {
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
    return () => intervalId && window.clearInterval(intervalId)
  }, [updateRowOne, updateRowTwo, updateRowThree, updateCreateBlockIntervalId])

  useEffect(() => {
    let intervalId
    if(!intervalId) {
      intervalId = window.setInterval(() => {
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
    return () => intervalId && window.clearInterval(intervalId)
  }, [updateBlockMovementIntervalId])

  const stopGame = () => {
    window.clearInterval(createBlockIntervalId)
    window.clearInterval(blockMovementIntervalId)
  }

  return {
    rowOne,
    rowTwo,
    rowThree,
    score,
    stopGame
  }
}

export default useObstaclesPosition;