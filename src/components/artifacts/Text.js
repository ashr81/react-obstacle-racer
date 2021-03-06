import styled from 'styled-components';
import { Flex } from '.';

const Text = styled(Flex)`
  color: ${({ theme: { colors }}) => colors.white};
  font-size: ${({ theme: { fontSizes }, fontSize}) => fontSizes[fontSize]};
  font-weight: ${({ theme: { fontWeights }, bold, bolder }) => {
    if(bold) return fontWeights.bold;
    else if(bolder) return fontWeights.bolder;
    else return fontWeights.normal;
  }}
`

Text.defaultProps = {
  fontSize: 'md',
  fontWeight: 'normal',
  as: 'p'
}

export default Text;