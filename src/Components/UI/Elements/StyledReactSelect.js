import ReactSelect from "react-select";
import styled from "styled-components";
const StyledReactSelect = styled(ReactSelect)`
.sales__control{
    height: 29px;
    min-height:29px;   
    width: ${(props) => props.width || "100%"};
    border-radius: 3px;
    // border: 0.0625em solid ${(props) => props.theme.inputBorderColor};
    border: 0.0625em solid gainsboro;
    background-color: ${(props) => props.theme.backgroundColor};
    menuPlacement:${(props) => (props.menuPlacement ? "top" : "")}
    color: ${(props) => props.theme.color};
    border-radius: 0.1rem;
    outline: none;
    box-shadow: 0px 4px 10px -4px  ${(props) => props.theme.boxShadowColor};
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
.sales__menu{
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    border-radius: 0.1rem;
    outline: none;
    box-shadow: 0px 4px 10px -4px  ${(props) => props.theme.boxShadowColor};
    }
    ::placeholder {
        color: #bfbebb;
      }
.sales__menu-list{
    /* background-color: ${(props) => props.theme.backgroundColor}; */
    color: ${(props) => props.theme.color};
    /* border-radius: 0.1rem;
    outline: none;
    box-shadow: 0px 4px 10px -4px  ${(props) => props.theme.boxShadowColor}; */
    /* &:hover{
        color: #666;
    } */
    ::placeholder {
        color: #bfbebb;
      }
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
    ::placeholder {
        color: #bfbebb;
      }
    }

`;
export default StyledReactSelect;
