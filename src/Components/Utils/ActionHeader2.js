import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledActionHeader = styled.div`
    // background:${props => props.theme.backgroundColor}; 
    // color: ${props => props.theme.color}
    background-color: white;
    color: orange;
    height:2.5em;
    // margin:  0.2rem;
    padding: 0.3rem 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    border-radius: 0.2rem;
    box-shadow: 0 0.0625em 0.25em 0.0625em${props => props.theme.boxShadowColor};
`
const ActionHeader2 = (props) => {
    return (
        <StyledActionHeader>
            <div>{props.leftComponent}</div>
            <div>{props.rightComponent}</div>
        </StyledActionHeader>
    )
}
ActionHeader2.propTypes = {
    leftComponent: PropTypes.element,
    rightComponent: PropTypes.element
}
export default ActionHeader2;