import React from "react";
import { Button } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { FlexContainer, MainWrapper, ResponsiveCard } from "../Layout";
import { CurrencySymbol } from "../../Common";
import { MultiAvatar } from "./";
import { Title, SubTitle } from "./";

const BussinessCard = (props) => {
  const {
    handleClick,
    handleSecondaryTitleClick,
    handlePreview,
    handlePreviewAdmin,
    imageId,
    imageURL,
    primaryTitle,
    secondaryTitle,
    secondaryImageId,
    secondaryImageURL,
    userType,
    subtitle1,
    subtitle2,
    hideSecondaryAvatar,
    subtitle1Icon,
    bottomBarComponent,
    department,
    currencyType,
    dropdownMenu,
  } = props;
  return (
    <ResponsiveCard flexDirection="column" style={{ borderRadius: 3 }}>
      <MainWrapper>
        <FlexContainer
          alignItems="center"
          flexWrap="no-wrap"
          style={{ height: "60px" }}
        >
          <FlexContainer style={{ flexBasis: "25%", marginRight: "0.2rem" }}>
            <MultiAvatar
              primaryTitle={primaryTitle}
              imageId={imageId}
              imageURL={imageURL}
              imgHeight={40}
              imgWidth={40}
            />
          </FlexContainer>
          &nbsp;
          <FlexContainer
            flexDirection="column"
            style={{ flexBasis: "65%", overflow: "hidden" }}
          >
            <Title
              fontSize="18px"
              overflow="hidden"
              textOverflow="ellipsis"
              style={{ color: "#337df4", cursor: "pointer" }}
              onClick={handleClick || null}
            >
              {primaryTitle || ""}
            </Title>

            {secondaryTitle && (
              <SubTitle
                overflow="hidden"
                textOverflow="ellipsis"
                style={{
                  cursor: "pointer",
                  fontSize: 14,
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={handleSecondaryTitleClick || null}
              >
                {/* <Icon type="mail" theme="filled" />  */}
                {!hideSecondaryAvatar && (
                  <MultiAvatar
                    primaryTitle={secondaryTitle || "F"}
                    imageId={secondaryImageId}
                    imageURL={secondaryImageURL}
                    imgHeight={25}
                    imgWidth={25}
                    smallAvatar
                    minAvatarWidth="25px"
                  />
                )}
                &nbsp;
                {secondaryTitle || ""}
              </SubTitle>
            )}
          </FlexContainer>
          <FlexContainer style={{ flexBasis: "10%", alignSelf: "flex-start" }}>
            {dropdownMenu || <></>}
          </FlexContainer>
        </FlexContainer>
        <FlexContainer flexDirection="column" style={{ padding: "0.2rem" }}>
          <SubTitle style={{ fontWeight: 500, fontSize: 15 }}>
            <FilterOutlined type={subtitle1Icon || "filter"} theme="filled" />
            &nbsp;&nbsp;
            {currencyType && <CurrencySymbol currencyType={currencyType} />}
            &nbsp;{subtitle1 || ""}
          </SubTitle>
          <SubTitle style={{ fontWeight: 500, fontSize: 15 }}>
            <FilterOutlined type={subtitle1Icon || "filter"} theme="filled" />{" "}
            &nbsp;
            {subtitle2 || ""}
          </SubTitle>
        </FlexContainer>
        <FlexContainer style={{ width: "100%", paddingLeft: "0.5rem" }}>
          {/* <FlexContainer style={{}}>
                        <Button
                            type="primary"
                            shape="circle"
                            icon="phone"
                            style={{ backgroundColor: '#466070', border: 'none', marginRight: '0.4rem', fontSize: 18 }} />
                        <Button
                            type="primary"
                            shape="circle"
                            icon="file-text"
                            style={{ backgroundColor: '#466070', border: 'none', marginRight: '0.4rem', fontSize: 18 }} />
                    </FlexContainer> */}
          {department === "Sales" && userType === "Admin" ? (
            <FlexContainer
              style={{}}
              justifyContent={bottomBarComponent ? "space-between" : "flex-end"}
              alignSelf="flex-end"
              alignItems="center"
            >
              {bottomBarComponent && bottomBarComponent}
              <Button
                size={"small"}
                type="ghost"
                style={{
                  color: "#888",
                  borderColor: "transparent",
                  alignSelf: "flex-end",
                }}
                onClick={handlePreviewAdmin}
              >
                <PulseIcon1></PulseIcon1>

                {/* <PulseIcon class="fas fa-heartbeat" style={{ fontSize: '145%' }}></PulseIcon> */}
              </Button>
            </FlexContainer>
          ) : (
            <FlexContainer
              style={{}}
              justifyContent={bottomBarComponent ? "space-between" : "flex-end"}
              alignSelf="flex-end"
              alignItems="center"
            >
              {bottomBarComponent && bottomBarComponent}
              <Button
                size={"small"}
                type="ghost"
                style={{
                  color: "#888",
                  borderColor: "transparent",
                  alignSelf: "flex-end",
                }}
                onClick={handlePreview}
              >
                <PulseIcon></PulseIcon>

                {/* <PulseIcon class="fas fa-heartbeat" style={{ fontSize: '145%' }}></PulseIcon> */}
              </Button>
            </FlexContainer>
          )}
        </FlexContainer>
      </MainWrapper>
    </ResponsiveCard>
  );
};
export default BussinessCard;

const AppIcon = (props) => (
  <i
    className={`fas fa-heartbeat ${props.className}`}
    style={{ fontSize: "145%" }}
  ></i>
);

const AppIcon1 = (props) => (
  <i
    className={`fas fa-heartbeat ${props.className}`}
    style={{ fontSize: "145%" }}
  ></i>
);

const PulseIcon = styled(AppIcon)`
  color: #e54447;
  &:hover {
    background: yellow;
    color: blue;
  }
`;
const PulseIcon1 = styled(AppIcon1)`
  color: green;
  &:hover {
    background: yellow;
    color: blue;
  }
`;
