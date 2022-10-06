import React, { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import {Route,Routes} from "react-router-dom"
import './App.css';
import Job from './Jobsite/Job';
import JobCard from "./Jobsite/JobCard";

function App() {
  return (
    <React.Fragment>
      <Suspense fallback={<></>}>
      <Routes>
        <Route exact path="/" element={<Job />}/>
        <Route exact path="/jobCard" element={<JobCard />}/>
        {/* <Route exact path="/" element={<QuizQuestionPage />}/> */}
        </Routes>
      </Suspense>
    </React.Fragment>
  );
}
export default App;
