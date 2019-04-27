import React from 'react';

import { RespTable } from './Styles';
import TableHeader from './TableHeader/TableHeader';
import TableBody from './TableBody/TableBody';
import TableFooter from './TableFooter/TableFooter';
import TableCaption from './TableCaption/TableCaption';

const table = (props) => {
    return (
        <RespTable>
            <TableCaption caption={props.caption} />

            <TableHeader
                headerCells={props.headerCells}
                sortedUporDown={props.sortedUporDown} />

            <TableBody
                detailPage={props.detailPage}
                data={props.data}
                 />

            <TableFooter footerCells={props.footerCells} show={props.showFooter} />
        </RespTable>
    );
};

export default table;