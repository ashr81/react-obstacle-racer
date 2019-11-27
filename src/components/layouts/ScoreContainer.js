import styled from 'styled-components';
import { Flex } from 'rebass'

const ScoreContainer =styled(Flex)`
  border: 3px solid ${({ theme: { colors }}) => colors.white};
  width: 300px;
  height: 200px;
  position: fixed;
  top: 0px;
  right: 20px;
`

export default ScoreContainer;