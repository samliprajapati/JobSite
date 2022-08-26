import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
export default function Job() {
  const [jobData, setJobData] = useState([])
     

  useEffect(() => {
    fetch(`https://develop.tekorero.com/api/v1/recruitment/publish/website/${window.location.hostname}`)
     .then(response => response.json())

      .then(data => setJobData(data))
  }, [])
  return (
    <React.Fragment>
      {jobData.map((item) => {
        return (
          <div className="card">
            <div className="headLine">{item.jobOrder}</div>
            <div className="description">{item.requirementName}</div>
            <div className="mixed">

              <div className="exp">{item.exp}</div>
              
              <div className="location">{item.location}</div>
            </div>
            
            <div className="description">{item.description}</div>

          </div>
        )
      })}
    </React.Fragment>
  )
}
