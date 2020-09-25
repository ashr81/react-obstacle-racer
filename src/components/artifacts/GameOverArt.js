import React from 'react';
import styled from 'styled-components';
import { Flex } from '.'
import Text from './Text';
import { reload } from '../../images';

const GameOverArtContainer = styled(Flex)
.attrs(() => ({ flexDirection: 'column', alignItems: 'center' }))`
  position: absolute;
  background-color: ${({ theme: { colors }}) => colors.black};
  color: ${({ theme: { colors }}) => colors.white};
  border: 2px solid ${({ theme: { colors } }) => colors.white};
  width: 100%;
`

const ImageExtended = styled.img`
  width: 48px;
  cursor: pointer;
`

const GameOverArt = ({ score, className, onRestart }) => {
  return (
    <GameOverArtContainer className={className}>
      <Text as='h2' bolder fontSize='xxl' py={4} my={4}>Game Over</Text>
      <Text as='h4'>Your score: {score}</Text>
      <Text>Play Again</Text>
      <ImageExtended src={reload} onClick={onRestart}/>
    </GameOverArtContainer>
  )
}

export default GameOverArt;