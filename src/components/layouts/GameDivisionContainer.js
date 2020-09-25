import styled from 'styled-components';
import { Flex } from '../artifacts';

const GameDivisionContainer = styled(Flex).attrs(() => ({ width: 1/3 }))`
  height: 100%;
  position: relative;
`

export default GameDivisionContainer;