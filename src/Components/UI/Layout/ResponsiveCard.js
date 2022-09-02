import styled from 'styled-components';

const ResponsiveCard = styled.div`
    display: block;
    box-sizing: border-box;
    -webkit-transition: all 0.3s linear;
           -moz-transition: all 0.3s linear;
             -o-transition: all 0.3s linear;
                transition: all 0.3s linear;
    width: calc(20%);
    &:hover{
      box-shadow: 0px 4px 10px -0.125em ${props => props.theme.boxShadowColor};
    }
    @media all and  (min-width: 900px) and (max-width: 1200px ) {
        -webkit-transition: all 0.3s linear;
           -moz-transition: all 0.3s linear;
             -o-transition: all 0.3s linear;
                transition: all 0.3s linear;
    width: calc(33.333333%);
  } 
     @media all and (max-width: 899px) and (min-width: 700px ) {
        -webkit-transition: all 0.3s linear;
           -moz-transition: all 0.3s linear;
             -o-transition: all 0.3s linear;
                transition: all 0.3s linear;
      width: calc(50%);
  }
      @media all and (max-width: 699px) and (min-width: 500px ) {
        -webkit-transition: all 0.3s linear;
           -moz-transition: all 0.3s linear;
             -o-transition: all 0.3s linear;
                transition: all 0.3s linear;
      width: calc(100%);
     /* flex: 0 1 calc(33.333333%); */ */
  } 
     @media all and (max-width: 499px) {
        -webkit-transition: all 0.3s linear;
           -moz-transition: all 0.3s linear;
             -o-transition: all 0.3s linear;
                transition: all 0.3s linear;
      width: calc(100%);
  }
`
export default ResponsiveCard;