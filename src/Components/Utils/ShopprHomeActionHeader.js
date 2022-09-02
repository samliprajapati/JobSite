import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const StyledShopprHomeActionHeader = styled.div`
z-index:1
font-weight:${props => props ? props.fontWeight : null};
background:#ffffff;
height: 8%;
margin: 0 1%;    
/* margin-bottom: 14px */
padding: 0.3rem 1rem;
display: flex;
line-height: 34px;
 /* position:sticky !important; */
 /* top:0px; */
justify-content: space-between;
align-items: center;
align-content: center;
border-radius: 0.2rem;
box-shadow: 0 0.18em 0 0 blue;
/* box-shadow: 0 0.0625em 0.25em 0.0625em${props => props.theme.boxShadowColor}; */
@media only screen and (max-width: 600px) {
    justify-content: ${props => props.hideIn ? "center" : "space-between"};
    flex-direction:${props => props.flexdirection ? props.flexdirection : "row"}
}

`

const ShopprHomeActionHeader = (props) => {
    const { fontWeight, flexdirection } = props

    return (
        <StyledShopprHomeActionHeader boxShadowColor={props.boxShadowColor} fontWeight={fontWeight}
            flexdirection={flexdirection}
            hideIn={props.hideInMobile}>
            <LeftComponentStyle hideIn={props.hideInMobile}>{props.leftComponent}</LeftComponentStyle>
            <div>{props.centerComponent}</div>
            <div>{props.centerComponent1}</div>
            <div>{props.rightComponent}</div>
        </StyledShopprHomeActionHeader>
    )
}
ShopprHomeActionHeader.propTypes = {
    leftComponent: PropTypes.element,
    centerComponent: PropTypes.element,
    centerComponent1: PropTypes.element,
    rightComponent: PropTypes.element
}

export default ShopprHomeActionHeader;




const LeftComponentStyle = styled.div`
display:block;
@media only screen and (max-width: 600px) {
    display:${props => props.hideIn ? "none" : "block"}
}
    `