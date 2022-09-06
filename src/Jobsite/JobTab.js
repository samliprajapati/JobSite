import React, { useState, Suspense } from "react";
import { StyledTabs } from "../Components/UI/Antd";
import { TabsWrapper } from "../Components/UI/Layout";
import JobCard from "./JobCard";
import JobUploadForm from "./JobUploadForm";

const TabPane = StyledTabs.TabPane;

function JobTab(props) {
  const [activeKey, setActiveKey] = useState("1");

  function handleTabChange(key) {
    setActiveKey(key);
  }

  return (
    <>

          <TabsWrapper>
          <StyledTabs defaultActiveKey={activeKey} onChange={handleTabChange}>
          <TabPane
              tab={
                <>
                  <h3>Vacancy</h3>
                  &nbsp;
                  {activeKey === "1" && <></>}
                </>
              }
              key="1"
            >
              <Suspense fallback={"Loading ..."}>
              <JobCard/> </Suspense>
            </TabPane>
  
            <TabPane
              tab={
                <>
                  <h3>Upload Profile</h3>
                  &nbsp;
                  {activeKey === "2" && <></>}
                </>
              }
              key="2"
            >
              <Suspense fallback={"Loading ..."}>
                {" "}
                <JobUploadForm/>
              </Suspense>
            </TabPane>
            
          </StyledTabs>
        </TabsWrapper>

        </>
  );
}

export default JobTab;