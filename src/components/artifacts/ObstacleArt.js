import React from 'react';
import styled, { css } from 'styled-components';
import { Flex } from 'rebass'

const IndividualBox = styled(Flex).attrs(() => ({ width: 25, height: 25 }))`
  background-color: white;
  border: 1px solid black;
`

const ObstacleArtContainer = styled(Flex)
.attrs(() => ({ flexDirection: 'column', alignItems: 'center' }))`
  position: absolute;
  ${({ top }) => top && css`
    top: ${top}px;
  `}
`

const IndividualBoxGroup = styled(Flex).attrs(() => ({ width: 1, justifyContent: 'center' }))``
const ObstacleArt = ({ positionY, className }) => {
  return (
    <ObstacleArtContainer top={positionY} className={className}>
      <IndividualBoxGroup width={1}>
        <IndividualBox/>
      </IndividualBoxGroup>
      <IndividualBoxGroup width={1}>
        <IndividualBox/>
        <IndividualBox/>
        <IndividualBox/>
        <IndividualBox/>
      </IndividualBoxGroup>
      <IndividualBoxGroup width={1}>
        <IndividualBox/>
        <IndividualBox/>
      </IndividualBoxGroup>
      <IndividualBoxGroup width={1}>
        <IndividualBox/>
        <IndividualBox/>
        <IndividualBox/>
        <IndividualBox/>
      </IndividualBoxGroup>
    </ObstacleArtContainer>
  )
}

export default ObstacleArt;