import { useState, useEffect } from 'react';

const usePlayerPositionX = () => {
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
    const onClickEventHandler = (event) => {
      const windowWidth = window.innerWidth
      if(windowWidth/2 <= event.clientX) {
        updatePlayerPositionX(positionX => {
          if(positionX < 200) return positionX + 100;
          else return positionX;
        })
      } else {
        updatePlayerPositionX(positionX => {
          if(positionX >= 100) return positionX - 100;
          else return positionX;
        })
      }
    }
    window.addEventListener('keydown', onKeyPressEventHandler)
    window.addEventListener('click', onClickEventHandler)
    return () => {
      window.removeEventListener('keydown', onKeyPressEventHandler)
      window.removeEventListener('click', onClickEventHandler)
    }
  }, [])
  return { playerPostionX }
}

export default usePlayerPositionX;