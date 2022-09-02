import DatePicker from "antd/lib/date-picker";
import styled from "styled-components";

const StyledDatePicker = styled(DatePicker)`
  .ant-input {
    border-radius: 0.1875em;
    // border: 0.0625em solid ${props => props.theme.inputBorderColor};
    border: 0.0625em solid gainsboro;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    display: block;
    margin: 0.2rem 0;
    border-radius: 0.1rem;
    outline: none;
    height: 29px;
    box-shadow: 0px 4px 10px -4px ${props => props.theme.boxShadowColor};
    border-right: ${props => (props.isRequired ? "0.1875em solid #ed260b" : "")};
    padding: 0.3rem 1rem;
    width: ${props => (props ? props.width : "100%")};
  }
`;
export default StyledDatePicker;
