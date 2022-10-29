import { css } from "styled-components";

import SourceCodeProRegular from './SourceCodePro/SourceCodePro-Regular.otf';
import SourceCodeProBold from './SourceCodePro/SourceCodePro-Bold.otf';

import LaneRegular from './Lane/LANENAR_.ttf';

import MulishRegular from './Mulish/Mulish-Regular.ttf';

const fonts = css`
    @font-face {
        font-family: 'Source Code Pro';
        src: url('${SourceCodeProRegular}') format('opentype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Source Code Pro';
        src: url('${SourceCodeProBold}') format('opentype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'Lane';
        src: url('${LaneRegular}') format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'Mulish';
        src: url('${MulishRegular}') format('truetype');
        font-weight: 400;
        font-style: normal;
    }
`

export default fonts;