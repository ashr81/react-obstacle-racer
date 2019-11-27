import styled from 'styled-components';
import { Flex } from 'rebass';

const AppContainer = styled(Flex)`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme: { colors }}) => colors.black};
`

export default AppContainer;