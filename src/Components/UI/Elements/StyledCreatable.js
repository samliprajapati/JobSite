import { Creatable } from "react-select";
import styled from "styled-components";
const StyledCreatable = styled(Creatable)`
    flex: 1 1;
    width: ${(props) => props.width || "auto"};
    height: 29px;
    min-height:29px
.sales__control{
    /* width: 400px; */
    height: 29px;
    min-height:29px;   
    width: ${(props) => props.width || "auto"};
    border-radius: 5px;
    border: 0.0625em solid ${(props) => props.theme.inputBorderColor};
    background-color: ${(props) => props.theme.backgroundColor};
    menuPlacement:${(props) => (props.menuPlacement ? "top" : "")}
    color: ${(props) => props.theme.color};
    // border-radius: 0.1rem;
    border: 0.0625em solid black;
    outline: none;
    box-shadow:${(props) => (props.isShadow ? "" : "0px 4px 10px -4px #aaa")} ; 
    //  box-shadow: 0px 4px 10px -4px  ${(props) =>
      props.theme.boxShadowColor}; 
    border-right: ${(props) => (props.isRequired ? "3px solid #ed260b" : "")};
    Left:${(props) => props.Left || "auto"}
    // margin-top:${(props) => props.margintop || "auto"}
   &:hover{
    box-shadow: 0px 4px 10px -0.125em  ${(props) => props.theme.boxShadowColor};
    border: 0.0625em solid #1890ff;
    }
    ::placeholder {
      color: #bfbebb;
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
    width: ${(props) => props.width || "100%"};
    height: 38;
    background-color: ${(props) => props.theme.applicationBackground};
    color: ${(props) => props.theme.color};
    border-radius: 0.1rem;
    
    outline: none;
    // border:0.0625em solid red
    /* box-shadow: 0px 4px 10px -4px  ${(props) =>
      props.theme.boxShadowColor}; */
    }
.sales__menu-list{
    /* background-color: ${(props) => props.theme.applicationBackground}; */
    color: ${(props) => props.theme.color};
    /* border-radius: 0.1rem;
    height: 38;
    outline: none;
    menuPlacement=auto;
    box-shadow: 0px 4px 10px -4px  ${(props) => props.theme.boxShadowColor}; */
    /* &:hover{
        color: #666;
    } */
    }
.sales__option{
    /* background-color: ${(props) => props.theme.backgroundColor}; */
    color: ${(props) => props.theme.color};
    /* border-radius: 0.1rem;
    height: 38;
    menuPlacement=auto;
    outline: none;
    box-shadow: 0px 4px 10px -4px  ${(props) => props.theme.boxShadowColor}; */
    &:hover{
        color: #222;
    }
   
`;
export default StyledCreatable;
