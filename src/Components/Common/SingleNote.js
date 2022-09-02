import React from "react";
import styled from "styled-components";
import moment from "moment";
import { SubTitle, Spacer } from "../UI/Elements";
const NotesWrapper = styled.div``;
export default function SingleNote(props) {
  console.log(props);
  const {
    notes,
    creationDate,
    // metaData: {
    //   creatorDetails: { firstName, lastName }
    // }
  } = props;
  return (
    <NotesWrapper>
      <div dangerouslySetInnerHTML={{ __html: notes }} />
      <SubTitle
        fontSize="0.875em"
        fontFamily="Karla"
        style={{ color: "#a7b2bc", marginTop: "-0.75em" }}
      >
        <Spacer />
        {`${moment(creationDate).fromNow()}`}
        {/* <b>
          {userId !== creatorId
            ? ` by ${firstName || ""} ${lastName || ""}`
            : ""}
        </b> */}
      </SubTitle>
    </NotesWrapper>
  );
}
