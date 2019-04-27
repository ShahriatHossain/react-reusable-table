import React from 'react';

import { Column2, TableHeaderCell, Row, ITagUp, ITagDown } from '../../Styles';

export const tableHeaderCell = (props) => {
    let cell = '';

    // checking header cell is sortable or not
    // if sortable then enable sort feature
    if (props.isSortAble) {
        cell = <Column2>
            <div><ITagUp onClick={props.sortedDown}></ITagUp></div>
            <div><ITagDown onClick={props.sortedUp}></ITagDown></div>
        </Column2>
    }
    return (
        <TableHeaderCell>
            <Row>
                <Column2>{props.val}</Column2>
                {cell}
            </Row>
        </TableHeaderCell>
    );
};

export default tableHeaderCell;