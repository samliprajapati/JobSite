import { AsyncCreatable } from "react-select";
import styled from "styled-components";
const StyledCreatable = styled(AsyncCreatable)`
    flex: 1 1;
.sales__control{
    width:${(props) => (props ? props.width : "400px")};
    height: 29px;
    min-height:30px; 
    border-radius: 3px;
    // border: 0.0625em solid ${(props) => props.theme.inputBorderColor};
    border: 0.0625em solid gainsboro;
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    border-radius: 0.1rem;
    outline: none;
    // margin-top:4px;
    
    box-shadow: 0px 4px 10px -4px  ${(props) => props.theme.boxShadowColor};
    border-right: ${(props) => (props.isRequired ? "3px solid #ed260b" : "")};
   &:hover{
    box-shadow: 0px 4px 10px -0.125em  ${(props) => props.theme.boxShadowColor};
    border: 0.0625em solid #1890ff;
    }
    ::placeholder {
      color: #888;
    }
    }
    .sales__placeholder{
        color: #bfbebb;
        top:40%;
    }
    
    .sales__single-value {
        top: 39%;
    }
    .sales__indicator-separator{
        margin-top:0px
    }
    .sales__dropdown-indicator{
        padding: 0px 5px 6px;
        
    }
.sales__menu{
    background-color: ${(props) => props.theme.applicationBackground};
    color: ${(props) => props.theme.color};
    border-radius: 0.1rem;
    outline: none;
    box-shadow: 0px 4px 10px -4px  ${(props) => props.theme.boxShadowColor};
    }
.sales__menu-list{
    /* background-color: ${(props) => props.theme.applicationBackground}; */
    color: ${(props) => props.theme.color};
    /* border-radius: 0.1rem;
    outline: none;
    box-shadow: 0px 4px 10px -4px  ${(props) => props.theme.boxShadowColor}; */
    /* &:hover{
        color: #666;
    } */
    }
.sales__option{
    /* background-color: ${(props) => props.theme.backgroundColor}; */
    color: ${(props) => props.theme.color};
    /* border-radius: 0.1rem;
    outline: none;
    box-shadow: 0px 4px 10px -4px  ${(props) => props.theme.boxShadowColor}; */
    &:hover{
        color: #222;
    }
    }

`;
export default StyledCreatable;
