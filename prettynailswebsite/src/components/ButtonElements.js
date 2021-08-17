import styled from 'styled-components';
import {Link} from 'react-scroll';

// FANCY HOVER ANIMATEIONS WIHOUT DOING IT WITH A NEW STYLE EVERYTIME
export const Button = styled(Link)`
    border-radius: 10px;
    background: ${({primary}) => (primary ? '#e3c1d2' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#fff' : '#e3c1d2')};
    }
`;

