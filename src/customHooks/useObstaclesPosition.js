import { useState, useEffect } from 'react';

const useObstaclesPosition = () => {
  const [rowOne, updateRowOne] = useState([])
  const [rowTwo, updateRowTwo] = useState([])
  const [rowThree, updateRowThree] = useState([])

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
    }
    return () => intervalId && window.clearInterval(intervalId)
  }, [updateRowOne, updateRowTwo, updateRowThree])

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      updateRowOne(row => row.filter(r => r <= 600).map(r => r + 20))
      updateRowTwo(row => row.filter(r => r <= 600).map(r => r + 20))
      updateRowThree(row => row.filter(r => r <= 600).map(r => r + 20))
    }, 100)
    return () => intervalId && window.clearInterval(intervalId)
  }, [])

  return {
    rowOne,
    rowTwo,
    rowThree
  }
}

export default useObstaclesPosition;