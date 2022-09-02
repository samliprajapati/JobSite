import TimePicker from "antd/lib/time-picker";
import styled from "styled-components";

const StyledTimePicker = styled(TimePicker)`
  .ant-time-picker-input {
    border-radius: 0.1875em;
    border: 0.0625em solid ${props => props.theme.inputBorderColor};
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    display: block;
    margin: 0.2rem 0;
    border-radius: 0.1rem;
    height: 29px;
    width: 100%;
    outline: none;
    box-shadow: 0px 4px 10px -4px ${props => props.theme.boxShadowColor};
    border-right: ${props => (props.isRequired ? "0.1875em solid #ed260b" : "")};
    padding: 0.3rem 1rem;
  }
`;
export default StyledTimePicker;
