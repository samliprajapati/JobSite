import Drawer from "antd/lib/drawer";
import styled from "styled-components";

const StyledDrawer = styled(Drawer)`
    .ant-drawer-content-wrapper {
        background-color: white !important;
        color: black;
        border: none !important;
        // border:5px solid red;
        width:40% !important;
        
        
    }
    .ant-drawer-content {
        background-color:white !important;
        color: black;
    }
    .ant-drawer-wrapper-body{
      // overflow:hidden !important;
    }
    .ant-drawer-body {
        background-color: white !important;
        color: black;
        padding: 0.5rem;
        border: none !important;
    }
    .ant-drawer-header {
        // background-image: linear-gradient(-90deg,#001529,#1890ff);
        
        /* color: ${(props) => props.theme.color}; */
        /* color: #fff; */
        
        /* padding: 20px 20px 0px 20px; */
        // box-shadow: 0 0.75em 6px -6px rgb(46,44,44);
        border-bottom:0.0625em solid  #aaa;
      
        
    }
    .ant-drawer-title {
        color: black;
       
    }
    .anticon {
   
    color: black;
    }
 

`;
export default StyledDrawer;
