import Icon from 'antd/lib/icon';
import styled from 'styled-components';

const StyledIcon = styled(Icon)`
    cursor: ${props => props.theme.cursor || 'pointer'};
    font-size: ${props => props.theme.size || '18px'};
    color: ${props => props.theme.color};
`
export default StyledIcon;