import Tabs from "antd/lib/tabs";
import styled from "styled-components";

const StyledTabs = styled(Tabs)`
    .ant-tabs-nav-container {
        color: ${props => props.theme.color};
        line-height:0.9;
    }
    .ant-tabs-bar {
        margin: 0.3rem;
        line-height:0.9;
    }
    .ant-tabs-nav .ant-tabs-tab{
        margin: 0 5px 0 0;
        padding: 0.75em 20px;
        line-height:0.9;
    }
    .ant-nav-container {
        color: ${props => props.theme.color};
        box-shadow: 0 0.0625em 4px 0.0625em ${props => props.theme.boxShadowColor};
        border: 0.0625em solid ${props => props.theme.borderColor}
        border-radius: 0.1rem;
        line-height:0.9;
    }

   
    
`;
export default StyledTabs;
