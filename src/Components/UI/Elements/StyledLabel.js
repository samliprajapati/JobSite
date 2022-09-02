import styled from "styled-components";

const StyledLabel = styled.label`
  color: ${(props) => (props.color ? props.color : "black")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 600)};
  margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0.2em")};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.2em")};
  font-family: 'Poppins';
   font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
export default StyledLabel;
