import styled from 'styled-components'

const Title = styled.h1`
    color: ${props => props.color || props.theme.titleColor};
    text-align:${props => props.textAlign || 'justify'};
    font-size: ${props => props.fontSize || '30px'};
    font-family: ${props => props.fontFamily || 'Poppins'};
    font-weight: 700;
    // margin-left:  ${props => props.margin || '-0.75em'};
    padding:  ${props => props.padding || '0'};
    white-space: ${props => props.whiteSpace || 'nowrap'};
    overflow: ${props => props.overflow || ''};
    text-overflow: ${props => props.textOverflow || ''};
    width: ${props => props.width || '-webkit-fill-available'};
   font-style: normal;
    line-height: 45px;
    @media only screen 
and (min-device-width : 768px) 
and (max-device-width : 1024px)
and (-webkit-min-device-pixel-ratio: 2){
    border:"0.0625em solid red";
    font-size:1.2rem;
    text-align:center
  
}    
`
export default Title;