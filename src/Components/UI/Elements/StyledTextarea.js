import styled from "styled-components";

const StyledTextarea = styled.textarea.attrs({
  type: 'text',
  size: props => (props.small ? 4 : undefined),
})`
    width: 100%;
    min-height: 120px;
    border-radius: 3px;
    border: 0.0625em solid gainsboro;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    display: block;
    margin: 0.3rem 0;
    border-radius: 0.1rem;
    outline: none;
    box-shadow: 0px 4px 10px -4px  ${props => props.theme.boxShadowColor};
    padding: 0.3rem 1rem;
   &:hover{
    box-shadow: 0px 4px 10px -0.125em  ${props => props.theme.boxShadowColor};
    border: 0.0625em solid #1890ff;
    }
    ::placeholder {
      color: #888;
    }
   `
export default StyledTextarea;