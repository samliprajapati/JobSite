import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handleCandidateApplyModal,handleEmailFormModal } from "./JobAction";
import moment from "moment";
import {getJobCardDetails,setCardData} from "./JobAction";

function Job(props) {
  // const [jobData, setJobData] = useState([]);
  // window.location.hostname
  // useEffect(() => {
  //   fetch(
  //     `https://develop.tekorero.com/employeePortal/api/v1/recruitment/publish/website?url=dtoc.tekorero.com`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setJobData(data));
  // }, []);

useEffect(()=>{props.getJobCardDetails()},[])

  const data = props.jobData.sort((a, b) => {
    const indA = a.pingInd;
    const indB = b.pingInd;
    if (indA < indB) {
      return 1;
    }
    if (indA > indB) {
      return -1;
    }

    // ind must be equal
    return 0;
  });

  
  return (
    <React.Fragment>
      <div className="wrapper">

      
      {data.map((item) => {
        return (
          <div className="main-card">
            <div className="card-part1">
              <h3 className="job" ><b>Job Id</b>{item.jobOrder}</h3>
            <h3 className="req"><b>Recruitment</b>{item.requirementName}</h3>
            <h3 className="req"><b>Skills</b>{item.skillSetList}</h3>
            </div>
            <div className="card-part2">
              <h3 className="crd"><b>Preference</b>{item.workPreference}</h3>
          
            <h3 className="loc"><b>Location</b>{item.location}</h3>
                
              <h3 className="avl"><b>Start Date</b>
              {` ${moment(item.avilableDate).format("ll")}`}
              </h3>
              
            </div>
            <div className="card-part3">
            <h3><b>Description:</b></h3>
              <h3 className="description">{item.description}</h3>
            </div>
            <Button
              type="primary"
              htmlType="submit"
              className="aply"
              onClick={() => {props.handleEmailFormModal(true)
              props.setCardData(item)
              }}
             
            >
              Apply
            </Button>
          </div>
        );
      })}
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = ({ job }) => ({
  addCandidateApply: job.addCandidateApply,
  addEmailformModal:job.addEmailformModal,
  jobData:job.jobData,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      handleCandidateApplyModal,
      handleEmailFormModal,
      getJobCardDetails,
      setCardData
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Job);
