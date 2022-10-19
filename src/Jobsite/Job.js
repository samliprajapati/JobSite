import React, { useEffect,Suspense} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import JobTab from "./JobTab";
import JobHeader from "./JobHeader";
import JobUploadForm from "./JobUploadForm";
import JobCard from "./JobCard";
import {setJobViewType} from "./JobAction";
import { BundleLoader } from '../Components/Placeholder';
import { handleCandidateApplyModal,handleEmailFormModal } from "./JobAction";
import CandidateJobApplyModal from "./CandidateJobApplyModal";
import AddEmailFormModal from "./AddEmailFormModal";
import JobVendorForm from "./JobVendorForm";

function Job(props) {
  useEffect(() => {
    
  }, [])
  const {
    setJobViewType,
    viewType,
  } = props;

  return (
    <React.Fragment>
      <JobHeader setJobViewType={setJobViewType}  
       viewType={viewType} />
       <div>
 <Suspense fallback={<BundleLoader />}>
          {viewType === "jobcard" ? 
            <JobCard 
            addEmailformModal={props.addEmailformModal}
            handleEmailFormModal={props.handleEmailFormModal}
            />
           : viewType === "jobform" ? 
            <JobUploadForm/>
          :  viewType === "jobvendor" ? 
            <JobVendorForm/>
           : null}
        </Suspense>
    </div>
    <AddEmailFormModal
    addEmailformModal={props.addEmailformModal}
    handleEmailFormModal={props.handleEmailFormModal}
    />
    {/* <CandidateJobApplyModal
    addCandidateApply={props.addCandidateApply}
    handleCandidateApplyModal={props.handleCandidateApplyModal}
    /> */}

    
    </React.Fragment>
  )
}
const mapStateToProps = ({job }) => ({
  viewType:job.viewType,
  addCandidateApply: job.addCandidateApply,
  addEmailformModal:job.addEmailformModal,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
        setJobViewType,
        handleCandidateApplyModal,
        handleEmailFormModal
      },
      dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Job);