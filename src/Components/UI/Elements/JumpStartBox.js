import React from "react";
import { Select } from "antd";
import {
  CaretDownOutlined,
  CaretUpOutlined,
  EditOutlined,
} from "@ant-design/icons";
import styled from "styled-components";
import ContentLoader from "react-content-loader";
import { CurrencySymbol } from "../../Common";
import CurrencyCompressor from "../../Common/CurrencyCompressor";
// import { renderTooltip } from "../../../Helpers/Function/UIFunctions";
const { Option } = Select;
const JumpStartWrapper = styled.div`
  margin: 0.2rem 0.4rem;
  padding: 1rem;
  border: 0.0625em solid #ddd;
  width: "24.5em";
  border-radius: 20px;
  display: flex;
  justify-content: "center";
  align-items: center;
  background: ${(props) => props.bgColor || "#fff"};
  color: #333 !important;
  cursor: ${(props) => (props.clickable ? "pointer" : "")};
  -webkit-box-shadow: 0 8px 6px -6px rgb(46, 44, 44);
  -moz-box-shadow: 0 8px 6px -6px rgb(46, 44, 44);
  box-shadow: 0 8px 6px -6px rgb(46, 44, 44);
  flex: 1 1 0;
  height: 7.6rem;
  width:22rem;
  transition: 0.3s all;
  &:hover {
    -webkit-box-shadow: 0 0.75em 6px -6px rgb(46, 44, 44);
    -moz-box-shadow: 0 0.75em 6px -6px rgb(46, 44, 44);
    box-shadow: 0 0.75em 6px -6px rgb(46, 44, 44);
  }
`;
const Progress = styled.span`
  color: ${(props) => (props.amount >= 0 ? "green" : "rgb(248, 15, 15)")};
  font-size: 0.8rem;
  margin-left: 8px;
`;
const JumpStartDetail = ({
  title,
  value,
  stringValue,
  currencyType,
  bgColor,
  clickable,
  noProgress,
  handleEdit,
  isLevelTextInputOpen,
  progress,
  edit,
  levels,
  isLoading,
  handleUpdate,
  handleLevelNotEdit,
  userId,
  taskInd,
}) => {
  console.log(levels);
  function onChange(value) {
    if (taskInd) {
      handleLevelNotEdit();
    } else {
      handleUpdate(userId, { level: value });
    }
    //debugger;
    console.log(value);
  }
  return (
    <JumpStartWrapper bgColor={bgColor} clickable={clickable}>
      <div style={{marginLeft:"1.25em"}}>
        <h3
          style={{
            color: "white",
            margin: "auto",
            fontSize: "1.2em",
          }}
        >
          {title || "N/A"}
        </h3>

        {isLoading ? (
          <span
            style={{
              width: 120,
              height: 30,
              display: "inline-block",
              opacity: 0.5,
            }}
          >
            <MyLoader />{" "}
          </span>
        ) : (
          <h2 style={{ color: "white", fontSize: "2.625em", margin: "auto" }}>
            {isLevelTextInputOpen ? (
              <>
                <Select
                  // dropdownStyle={{ backgroundColor: "green", width: "150px" }}
                  // value={value || ""}
                  defaultValue={value}
                  showSearch
                  // disabled={!this.props.disabled}
                  style={{ width: 150, marginBottom: "0.1875em" }}
                  placeholder="Select"
                  // onChange={onChange}
                  onSelect={onChange}
                >
                  {levels.map((item) => {
                    return <Option value={item.level}>{item.level} </Option>;
                  })}
                </Select>
                {/* <TextInput
                  placeholder="Level"
                  name="processName"
                  // defaultValue={this.state.currentProcess.processName}
                  // onChange={this.handleChange}
                  width={"100%"}
                  height={"20px"}
                  // style={{ marginLeft: "45px" }}
                /> */}
              </>
            ) : (
              <>
                {currencyType && <CurrencySymbol currencyType={currencyType} />}
                {currencyType && <span>&nbsp;&nbsp;</span>}
                {stringValue ? value : CurrencyCompressor(value) || 0}
                &nbsp;
                {edit && (
                  <EditOutlined
                    tooltipTitle="Edit"
                    // iconType="edit"
                    onClick={handleEdit}
                    size="14px"
                  />
                )}
              </>
            )}

            {!noProgress && (
              // renderTooltip(
              //   "this is what progress means",
              <Progress amount={progress || 0}>
                {progress > 0 ? (
                  <>
                    {/* <Icon type="caret-up" /> */}
                    <CaretUpOutlined />
                    {`${(progress && progress.toFixed(0)) || 0}%`}
                  </>
                ) : (
                  <>
                    {/* <Icon type="caret-down" /> */}
                    <CaretDownOutlined />
                    {`${(progress && progress.toFixed(0)) || 0}%`}
                  </>
                )}
                {/* &nbsp;{`${(progress && progress.toFixed(2)) || 0}%`} */}
              </Progress>
            )
            // )
            }
          </h2>
        )}
      </div>
    </JumpStartWrapper>
  );
};

export default JumpStartDetail;

const MyLoader = (props) => (
  <ContentLoader
    height={40}
    width={150}
    speed={2}
    primaryColor="#395E9D"
    secondaryColor="#223393"
    {...props}
  >
    <rect x="25" y="15" width="150px" height="30px" />
  </ContentLoader>
);
