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
      {data.map((item) => {
        return (
          <div className="card">
            <h4>{item.jobOrder}</h4>
            <h3>{item.requirementName}</h3>

            <div className="mixed">
              <h3 className="exp">{item.exp}</h3>

              <h3 className="location">{item.location}</h3>
            </div>
            <h3 className="description">{item.description}</h3>
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
