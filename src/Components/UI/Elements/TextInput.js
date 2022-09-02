import styled from "styled-components";

const TextInput = styled.input.attrs({
  type: "text",
  size: (props) => (props.small ? 4 : undefined),
})`
    border-radius: 3px;
    height:2.1em;
    background: #FFFFFF;
     border: 0.0625em solid #000000;
     box-sizing: border-box;
      background: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#FFFFFF"};
   border: 0.0625em solid #000000;
border-radius: 5px;
    // border: 0.0625em solid ${(props) => props.theme.inputBorderColor};
   
    display: block;
    margin: 0 0 0.2rem 0;
    
    
    width:100% !important;

    Left:${(props) => props.Left || "auto"}
    
    /* box-shadow: 0px 4px 10px -4px  ${(props) =>
      props.theme.boxShadowColor}; */
    padding: 0.3rem 1rem;
    
    
  
    &:hover{
      /* box-shadow: 0px 4px 10px -0.125em  #777;
      border: 0.0625em solid #1890ff;
      // box-shadow: 0px 4px 10px -0.125em  ${(props) =>
        props.theme.boxShadowColor}; */
      }
    ::placeholder {
      /* color: #bfbebb; */
    }
    @media only screen and (max-width: 600px) {
    
      width:30px;
  
         
       }
   `;
export default TextInput;
