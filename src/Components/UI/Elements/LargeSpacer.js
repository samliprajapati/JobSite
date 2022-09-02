import React from "react";
import styled from "styled-components";

const Space = styled.div`
  margin: ${props => props.marginTop || "18px"} 0px;
`;
export default function LargeSpacer(props) {
    return <Space {...props} />;
}
