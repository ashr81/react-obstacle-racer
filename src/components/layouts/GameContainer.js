import styled from 'styled-components';
import { Flex } from 'rebass'

const GameContainer = styled(Flex)`
  border: 3px solid ${({ theme: { colors }}) => colors.white};
  width: 308px;
  height: calc(100vh - 200px);
  position: fixed;
  right: 50%;
  transform: translateX(50%);
  bottom: 0px;
  margin-right: auto;
  margin-left: auto;
`

export default GameContainer;