import React from 'react';

import { RespTableFooter } from '../Styles';
import TableFooterCell from './TableFooterCell/TableFooterCell';

export const tableFooter = (props) => {
    const cells = props.footerCells.map((c, i) => (
        <TableFooterCell
            key={i}
            val={c.label} />
    ));

    let footer = '';
    if (props.show) {
        footer = <RespTableFooter>
            {cells}
        </RespTableFooter>
    }

    return (
        <div>
            {footer}
        </div>
    );
};

export default tableFooter;