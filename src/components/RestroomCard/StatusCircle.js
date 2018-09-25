import styled from 'styled-components';

/* eslint-disable no-confusing-arrow */
const StatusCircle = styled.span`
    height: 25px;
    width: 25px;
    background-color: ${props => props.occupied ? 'red' : 'lawngreen'};
    border-radius: 50%;
    display: inline-block;
    margin-left: 10px;
`;

export default StatusCircle;
