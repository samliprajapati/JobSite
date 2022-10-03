import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { handleCandidateApplyModal } from "./JobAction";

function Job(props) {
  const [jobData, setJobData] = useState([]);
  // window.location.hostname
  useEffect(() => {
    fetch(
      `https://develop.tekorero.com/employeePortal/api/v1/recruitment/publish/website?url=dtoc.tekorero.com`
    )
      .then((response) => response.json())
      .then((data) => setJobData(data));
  }, []);
  // People.sort(dynamicSort("Name"));

  const data = jobData.sort((a, b) => {
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

  console.log(data);
  return (
    <React.Fragment>
      <div className="wrapper">

      
      {data.map((item) => {
        return (
          <div className="main-card">
            <div className="card-part1">
              <h3><b>Job Id:</b></h3>
            <h3>{item.jobOrder}</h3>
            <h3><b>Recruitment:</b></h3>
            <h3>{item.requirementName}</h3>
            <h3><b>Skills:</b></h3>
            </div>
            <div className="card-part2">
              <h3><b>Preference:</b></h3>
           
            <h3><b>Location:</b></h3>
                {item.location}
              <h3><b>Start Date:</b></h3>
            <h3><b>Available Date:</b></h3>
            </div>
            <div className="card-part3">
            <h3><b>Description:</b></h3>
              <h3 className="description">{item.description}</h3>
            </div>
            <Button
              type="primary"
              htmlType="submit"
              className="aply"
              onClick={() => props.handleCandidateApplyModal(true)}
             
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
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      handleCandidateApplyModal,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Job);
