import Upload from "antd/lib/upload";
import styled from "styled-components";

const StyledUpload = styled(Upload)`
  .ant-upload.ant-upload-select-picture-card {
    border: 0.0625em dashed ${props => props.theme.borderColor};
    width: 104px;
    height: 127px;
    border-radius: 4px;
    border-color: teal;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.color};
    text-align: center;
    cursor: pointer;
    -webkit-transition: border-color 0.3s ease;
    -o-transition: border-color 0.3s ease;
    transition: border-color 0.3s ease;
    vertical-align: top;
    margin-right: 8px;
    margin-bottom: 8px;
    display: table;
  }
  .ant-upload-list-picture-card .ant-upload-list-item {
    height: 127px;
  }
`;
export default StyledUpload;
