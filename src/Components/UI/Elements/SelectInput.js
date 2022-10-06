import styled from "styled-components";
import { StyledSelect } from "../Antd";
const SelectInput = styled(StyledSelect)`
  .ant-input{
      // border-radius: 0.1875em;
      // border: 0.0625em solid ${props => props.theme.borderColor};
      // border: 0.0625em solid gainsboro;
      background-color: ${props => props.theme.backgroundColor};
      color: ${props => props.theme.color};
      display: block;
      margin: 0 0 0.2rem 0;
      width:21.875em;
      // border-radius: 0.3rem;
      outline: none;
      box-shadow:${props => (props.isShadow ? "" : "0em 0.25em 0.625em -0.25em #aaa")} ; 
       height:1.8125em;
      border-right: ${props =>
    props.isRequired ? "0.1875em solid #ed260b" : ""} !important;
      padding: 0.3rem 1rem;
    &:hover{
      // box-shadow: 0em 0.25em 0.625em -0.125em  #777;
      }
      ::placeholder {
        color: #888;
      }
      ::placeholder {
        color: #bfbebb;
      }
  }
  .ant-select-selection {
    height: 1.8125em;
    line-height:0px;
     
  }
   `;
export default SelectInput;
