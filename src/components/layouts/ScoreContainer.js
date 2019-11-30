import styled from 'styled-components';
import { Flex } from 'rebass'

const ScoreContainer =styled(Flex).attrs(() => ({ alignItems: 'center', justifyContent: 'center' }))`
  border: 3px solid ${({ theme: { colors }}) => colors.white};
  width: 300px;
  height: 200px;
  position: fixed;
  top: 0px;
  right: 20px;
  color: ${({ theme: { colors }}) => colors.white};
`

export default ScoreContainer;