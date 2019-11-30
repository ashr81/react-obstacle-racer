import styled from 'styled-components';
import { Flex } from 'rebass'

const ScoreContainer =styled(Flex).attrs(() => ({ alignItems: 'center', justifyContent: 'center' }))`
  top: 0px;
  height: 30px;
  color: ${({ theme: { colors }}) => colors.white};
`

export default ScoreContainer;