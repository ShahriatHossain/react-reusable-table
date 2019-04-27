import React from 'react';

import { RespTableCaption } from '../Styles';

export const tableCaption = (props) => {
    return (
        <RespTableCaption>
            {props.caption}
        </RespTableCaption>
    );
};

export default tableCaption;