import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

export default function Job() {
  const [jobData, setJobData] = useState([])
  // window.location.hostname
  useEffect(() => {
    fetch(`https://develop.tekorero.com/employeePortal/api/v1/recruitment/publish/website?url=dtoc.tekorero.com`)
     .then(response => response.json())
      .then(data => setJobData(data))
  }, [])
  return (
    <React.Fragment>
      {jobData.map((item) => {
        return (
          <div className="card">
            <h4>{item.jobOrder}</h4>
            <h3>{item.requirementName}</h3>
            <div className="mixed">

              <h3 className="exp">{item.exp}</h3>
              
              <h3 className="location">{item.location}</h3>
            </div>
            
            <h3 className="description">{item.description}</h3>

          </div>
        )
      })}
    </React.Fragment>
  )
}
