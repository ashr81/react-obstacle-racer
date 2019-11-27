import styled, { css } from 'styled-components';
import { ObstacleArt } from '.';

const PlayerArt = styled(ObstacleArt)`
  top: unset;
  bottom: 0px;
  ${({ positionX }) => positionX && css`
    left: ${positionX}px;
  `}
`

export default PlayerArt;