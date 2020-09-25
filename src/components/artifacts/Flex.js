import styled from "styled-components";
import {
  background, display, border, shadow,
  layout, typography, flexbox, position
}  from "styled-system";

const Flex = styled.div`
  box-sizing: border-box;
  display: flex;
  ${flexbox}
  ${background}
  ${display}
  ${border}
  ${shadow}
  ${layout}
  ${border}
  ${typography}
  ${position}
`

export default Flex;