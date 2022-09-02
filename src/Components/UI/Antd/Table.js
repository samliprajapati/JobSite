import React from "react";
import { Table, Empty } from "antd";
import styled from "styled-components";

// const MyTable = () => (
//   <Table
//     locale={{
//       emptyText: <Empty description={"We couldn't find relevant data"} />,
//     }}
//   />
// );

const StyledTable = styled(Table)`
  color: ${(props) => props.theme.color};
  background-color: ${(props) => props.theme.backgroundColor};
  margin: ${(props) => props.theme.margin || "0.2rem"};
  margin-top: 0.8125em;
  e .ant-table {
    color: ${(props) => props.theme.color};
  }

  .ant-table-thead > tr > th {
    color: ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.backgroundColor};
    font-weight: bold;
  }
  .ant-table-thead > tr > th {
    // padding: 0.3125em 0.125em;
    // font-size: 0.875rem;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 1em;
    line-height: 1.2em;

    text-align: center;

    color: #000000;
  }

  .ant-table-tbody > tr > td {
    // padding: 0.3125em 0.125em;
    // font-size: 0.82rem;
    font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 0.85em;
line-height: 1.2em;
/* identical to box height */

text-align: center;

color: #1F4173;
  }

  .ant-table-thead > tr,
  .ant-table-tbody > tr {
    background-color: ${(props) => props.backgroundColor || ""};
  }
  .ant-table-tbody > tr:hover {
    background-color: ${(props) => props.theme.tableHoverColor};
  }
  .ant-table-tbody > tr:active {
    background-color: ${(props) => props.theme.tableHoverColor};
  }
  .ant-table-tbody > tr:focus {
    background-color: ${(props) => props.theme.tableHoverColor};
  }
  .dwXsDd .ant-table-thead > tr > th,
  .dwXsDd .ant-table-tbody > tr > td {
    padding: 1.3125em 0.5em;
  }
  .ant-table-tbody > tr:hover:not(.ant-table-expanded-row) > td {
    background-color: ${(props) => props.theme.tableHoverColor};
    color: ${(props) => props.theme.tableHoverFontColor};
  }
  .ant-table-filter-trigger {
    position: relative;
    display: flex;
    align-items: center;
    margin: -4px -8px -4px 4px;
    padding: 0 0.75em;
    color: tomato;
    font-size: 0.75em;
    border-radius: 0.125em;
    cursor: pointer;
    transition: all 0.3s;
  }
  .ant-table-filter-trigger:hover {
    color: tomato;
    background: rgba(0, 0, 0, 0.04);
  }
  .ant-table-filter-trigger.active {
    color: #1890ff;
  }
`;
export default StyledTable;
