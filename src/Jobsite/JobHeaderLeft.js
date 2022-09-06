import { Tooltip } from 'antd'
import React, { useEffect } from "react";
import { FlexContainer } from '../Components/UI/Layout'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import FWLogo from "../images/Logo_new.png";

const JobHeaderLeft = (props) => {
    return (
      <FlexContainer style={{lineHeight:"0.125em", alignItems:"center"}}>
        
        <img
              className="big-logo"
              src={FWLogo}
              style={{ width: 100 }}
              alt="Tekorero logo"
            />
            &nbsp;&nbsp;&nbsp;
        <Tooltip
      // title="Distributor"
      >
        <span
          onClick={() => props.setJobViewType("jobcard")}
          style={{
            // marginRight: "0.5rem",
            color: props.viewType === "jobcard" && "#1890ff",
          }}
        > 
        Vacancy
        </span>
      </Tooltip>
      &nbsp;&nbsp;
      <Tooltip
      //title="Customer"
      >
        <span
          onClick={() => props.setJobViewType("jobform")}
          style={{
            
            // marginRight: "0.5rem",
            color: props.viewType === "jobform" && "#1890ff",
          }}
        >
          Upload Profile
        </span>
       
      </Tooltip>
    </FlexContainer>


        );
}

const mapStateToProps = ({ }) => ({
 
});
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      
      
    },
    dispatch
  );
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(JobHeaderLeft);