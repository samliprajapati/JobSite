import Skeleton from "antd/lib/skeleton";
import styled from 'styled-components'

const StyledSkeleton = styled(Skeleton)`
    color: ${props => props.theme.color};
    background-color: ${props => props.theme.backgroundColor};
`
export default StyledSkeleton;