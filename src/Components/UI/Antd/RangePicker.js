import DatePicker from "antd/lib/date-picker";
import styled from "styled-components";

const StyledRangePicker = styled(DatePicker.RangePicker)`
  .ant-input {
    width: 250px;
    height: 30px;
    border-radius: 0.1875em;
    border: 0.0625em solid ${props => props.theme.inputBorderColor};
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    display: inline-flexbox;
    margin: 0.2rem 0;
    border-radius: 0.1rem;
    outline: none;
    padding: 0 1rem;
    .ant-calendar-range-picker-separator {
      vertical-align: inherit;
    }
  }
`;
export default StyledRangePicker;
