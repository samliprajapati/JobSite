import styled from "styled-components";

const DrawerHeaderText = styled.h1`
  color: #fff;
  font-weight: bold;
  text-shadow: 0.125em 0.125em 4px ${(props) => props.theme.textShadowColor};
  font-size: ${(props) => props.fontSize || "18px"};
  font-family: ${(props) => props.fontFamily || "Poppins"};
  padding: ${(props) => props.padding || "0"};
  white-space: ${(props) => props.whiteSpace || "wrap"};
  overflow: ${(props) => props.overflow || ""};
  text-overflow: ${(props) => props.textOverflow || ""};
  width: ${(props) => props.width || "-webkit-fill-available"};
`;

export default DrawerHeaderText;
