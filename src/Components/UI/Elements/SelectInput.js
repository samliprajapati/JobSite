import styled from "styled-components";
import { StyledSelect } from "../Antd";
const SelectInput = styled(StyledSelect)`
  .ant-input{
      border-radius: 0.1875em;
      // border: 0.0625em solid ${props => props.theme.borderColor};
      border: 0.0625em solid gainsboro;
      background-color: ${props => props.theme.backgroundColor};
      color: ${props => props.theme.color};
      display: block;
      margin: 0 0 0.2rem 0;
      width:350px;
      border-radius: 0.1rem;
      outline: none;
      box-shadow:${props => (props.isShadow ? "" : "0px 4px 10px -4px #aaa")} ; 
  // height: 2.0625em;
      border-right: ${props =>
    props.isRequired ? "0.1875em solid #ed260b" : ""} !important;
      padding: 0.3rem 1rem;
    &:hover{
      // box-shadow: 0px 4px 10px -0.125em  #777;
      }
      ::placeholder {
        color: #888;
      }
      ::placeholder {
        color: #bfbebb;
      }
  }
  .ant-select-selection {
    height: 29px;
     
  }
  
   `;
export default SelectInput;
