import React, { useEffect,Suspense} from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import JobTab from "./JobTab";
import JobHeader from "./JobHeader";
import JobUploadForm from "./JobUploadForm";
import JobCard from "./JobCard";
import {setJobViewType} from "./JobAction";
import { BundleLoader } from '../Components/Placeholder';

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
          {viewType === "jobcard" ? (
            <JobCard/>
          ) : viewType === "jobform" ? (
            <JobUploadForm/>
          ) : null}
        </Suspense>
    </div>
    </React.Fragment>
  )
}
const mapStateToProps = ({job }) => ({
  viewType:job.viewType
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
        setJobViewType
      },
      dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Job);