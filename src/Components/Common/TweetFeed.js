import React from "react";
import styled from "styled-components";
import moment from "moment";
// import { Icon } from "antd";
import { TwitterOutlined } from "@ant-design/icons";
const TweetBox = styled.div`
  margin: 0.2rem;
  padding: 0.3rem;
  border: 0.0625em solid #dfe1e5;
  border-radius: 0.5em;
  width: 250px;
  margin-left: 30px;
  /* width: calc(33% - 0.6rem); */
  height: 190px;
  display: flex;
  background: #fff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  align-items: space-between;
  flex-wrap: wrap;
`;
const TweetText = styled.a`
  display: block;
  cursor: ${(props) => (props.hasLink ? "pointer" : "default")};
  margin: 0.2rem;
  padding: 0.3rem;
  font-size: 0.8rem;
  color: #444;
  /* border: 0.0625em solid lightgreen; */
  &:hover {
    color: ${(props) => !props.hasLink && "#444"};
  }
`;
const CreatedAt = styled.p`
  margin: 0.2rem;
  padding: 0.3rem;
  color: #999;
  align-self: flex-end;
`;

const TweetFeed = ({ text, sourceName, createdAt, links }) => {
  const isLongTweet = text.length >= 130;
  return (
    <TweetBox>
      <div>
        <TwitterOutlined style={{ color: "#38A1F3" }} />
        <TweetText
          hasLink={links && links.url}
          target={links ? "_blank" : null}
          href={(links && links.url) || "#"}
        >
          {isLongTweet ? `${text.slice(0, 130)}...` : `${text}`}
        </TweetText>
      </div>
      <CreatedAt>{moment(createdAt).fromNow()}</CreatedAt>
    </TweetBox>
  );
};

export default TweetFeed;
