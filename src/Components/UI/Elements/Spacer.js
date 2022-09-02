import React from "react";
import styled from "styled-components";

const Space = styled.div`
  margin: ${props => props.marginTop || "7px"} 0px;
`;
export default function Spacer(props) {
  return <Space {...props} />;
}
