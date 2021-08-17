import { createGlobalStyle } from 'styled-components';
import PlayballWoff from './Playball.woff';
import PlayballWoff2 from './Playball.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${PlayballWoff}) format('woff2'),
        url(${PlayballWoff2}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;