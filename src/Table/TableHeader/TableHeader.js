import React from 'react';

import { RespTableHeader } from '../Styles';
import TableHeaderCell from './TableHeaderCell/TableHeaderCell';

export const tableHeader = (props) => {
    // adding header cell 
    const cells = props.headerCells.map((c, i) => (
        <TableHeaderCell
            key={i}
            val={c.label}
            isFilterAble={c.isFilterAble}
            isSortAble={c.isSortAble}
            sortedUp={() => props.sortedUporDown(c.name, 'desc')}
            sortedDown={() => props.sortedUporDown(c.name, 'asc')} />
    ));

    return (
        <RespTableHeader>
            {cells}
        </RespTableHeader>
    );
};

export default tableHeader;