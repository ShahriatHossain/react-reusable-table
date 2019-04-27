import React from 'react';

import { RespTableRow, RespTableBody } from '../Styles';
import TableBodyCell from './TableBodyCell/TableBodyCell';

export const tableBody = (props) => {
    const rows = props.data.map(r => {
        // mapping column values as row's cell
        const cells = Object.keys(r).map((k, i) => {
            return <TableBodyCell detailPage={props.detailPage} history={props.history} key={k + i} val={r[k]} index={i} />;
        });

        // adding cells for each rows
        return <RespTableRow key={r.id}>
            {cells}
        </RespTableRow>
    })
    return (
        <RespTableBody>
            {rows}
        </RespTableBody>
    );
};

export default tableBody;