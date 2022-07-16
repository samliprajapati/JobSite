import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
export default function Job() {
  const [jobData, setJobData] = useState([{
    headLine: "MEAN / MERN",
    description: "SUPPORT STAR CORPORATE SERVICES PVT. LTD.",
    exp: "3-8 year",
    package: "₹ 13,00,000 - 23,00,000 P.A",
    location: "Hyderabad/Secunderabad, Chennai, Bangalore/Bengaluru",
    skill: "Reactjs,HTML,css,Javascript",
    jobRole: "We are looking for MEAN / MERN Stack Developers Strong experience in building applications from the scratch using mandatory skills. Deep expertise in JavaScript, design patterns, and developer tools"
  },
  {
    headLine: "MEAN / MERN",
    description: "SUPPORT STAR CORPORATE SERVICES PVT. LTD.",
    exp: "3-8 year",
    package: "₹ 13,00,000 - 23,00,000 P.A",
    location: "Hyderabad/Secunderabad, Chennai, Bangalore/Bengaluru",
    skill: "Reactjs,HTML,css,Javascript",
    jobRole: "We are looking for MEAN / MERN Stack Developers Strong experience in building applications from the scratch using mandatory skills. Deep expertise in JavaScript, design patterns, and developer tools"
  },
  {
    headLine: "MEAN / MERN",
    description: "SUPPORT STAR CORPORATE SERVICES PVT. LTD.",
    exp: "3-8 year",
    package: "₹ 13,00,000 - 23,00,000 P.A",
    location: "Hyderabad/Secunderabad, Chennai, Bangalore/Bengaluru",
    skill: "Reactjs,HTML,css,Javascript",
    jobRole: "We are looking for MEAN / MERN Stack Developers Strong experience in building applications from the scratch using mandatory skills. Deep expertise in JavaScript, design patterns, and developer tools"
  }
    , {
    headLine: "MEAN / MERN",
    description: "SUPPORT STAR CORPORATE SERVICES PVT. LTD.",
    exp: "3-8 year",
    package: "₹ 13,00,000 - 23,00,000 P.A",
    location: "Hyderabad/Secunderabad, Chennai, Bangalore/Bengaluru",
    skill: "Reactjs,HTML,css,Javascript",
    jobRole: "We are looking for MEAN / MERN Stack Developers Strong experience in building applications from the scratch using mandatory skills. Deep expertise in JavaScript, design patterns, and developer tools"
  }
    , {
    headLine: "MEAN / MERN",
    description: "SUPPORT STAR CORPORATE SERVICES PVT. LTD.",
    exp: "3-8 year",
    package: "₹ 13,00,000 - 23,00,000 P.A",
    location: "Hyderabad/Secunderabad, Chennai, Bangalore/Bengaluru",
    skill: "Reactjs,HTML,css,Javascript",
    jobRole: "We are looking for MEAN / MERN Stack Developers Strong experience in building applications from the scratch using mandatory skills. Deep expertise in JavaScript, design patterns, and developer tools"
  }])


  useEffect(() => {
    // fetch("https://dog.ceo/api/breeds/image/random")
    //   .then(response => response.json())

    //   .then(data => setJobData(data.message))
  }, [])
  return (
    <React.Fragment>
      {jobData.map((item) => {
        return (
          <div className="card">
            <div className="headLine">{item.headLine}</div>
            <div className="description">{item.description}</div>
            <div className="mixed">

              <div className="exp">{item.exp}</div>
              <div className="package">{item.package}</div>
              <div className="location">{item.location}</div>
            </div>
            <div className="description">{item.skill}</div>
            <div className="description">{item.jobRole}</div>

          </div>
        )
      })}
    </React.Fragment>
  )
}