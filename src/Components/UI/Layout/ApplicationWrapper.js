import styled from 'styled-components';

const ApplicationWrapper = styled.div`
background-color: ${props => props.theme.applicationBackground};
color: ${props => props.theme.applicationColor};
padding: 0.3rem;
// height:98vh
`
export default ApplicationWrapper;