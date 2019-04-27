import React from 'react';

import { TableBodyCell } from '../../Styles';

export const tableBodyCell = (props) => {
    const cell = props.index === 0 ? <a href="#" onClick={() => props.detailPage(props.val)}>{props.val}</a>
        : <div>{props.val}</div>
    return (
        <TableBodyCell>
            {cell}
        </TableBodyCell>
    );
};

export default tableBodyCell;