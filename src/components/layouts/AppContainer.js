import styled from 'styled-components';
import { Flex } from '../artifacts';

const AppContainer = styled(Flex)`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: { colors }}) => colors.black};
`

export default AppContainer;