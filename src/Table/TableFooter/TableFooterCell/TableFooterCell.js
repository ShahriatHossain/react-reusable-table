import React from 'react';

import { TableFooterCell } from '../../Styles';

export const tableFooterCell = (props) => {
    return (
        <TableFooterCell>
            {props.val}
        </TableFooterCell>
    );
};

export default tableFooterCell;