import styled from 'styled-components';

// table container
export const RespTable = styled.div`
    width: 100%;
    display: table;
`;

// table caption
export const RespTableCaption = styled.div`
    display: table-caption;
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
`;

// table header
export const RespTableHeader = styled.div`
    display: table-header-group;
    background-color: gray;
    font-weight: bold;
    font-size: 15px;
`;

// table header cell
export const TableHeaderCell = styled.div`
    color: #495057;
    background-color: #e9ecef;
    border-color: #dee2e6;
    display: table-cell;
    padding: 10px;
    text-align: justify;
`;

// table body
export const RespTableBody = styled.div`
    display: table-row-group;
`;

// table row
export const RespTableRow = styled.div`
    display: table-row;
`;
   
// table row cell
export const TableBodyCell = styled.div`
    display: table-cell;
    border: 1px solid #ccc;
    padding: 5px;
`;

// table footer
export const RespTableFooter = styled.div`
    display: table-footer-group;
    background-color: gray;
    font-weight: bold;
    font-size: 15px;
    color: rgba(255, 255, 255, 0.45);
`;

// footer cell
export const TableFooterCell = styled.div`
    display: table-cell;
    padding: 10px;
    text-align: justify;
    border-bottom: 1px solid black;
`;

export const ITagUp = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    cursor: pointer;
`; 

export const ITagDown = styled.i`
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    cursor: pointer;
`; 
  
export const Right = styled.div`
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
`; {
    
}
  
export const Left = styled.div`
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
`; 
  
export const Up = styled.div`
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
    cursor: pointer;
`; 
  
export const Down = styled.div`
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    cursor: pointer;
`;

export const Row = styled.div`
    display: flex;
`; 

/* Create two equal columns that sits next to each other */
export const Column1 = styled.div`
    flex: 50 %;
    padding: 10px;
`; 

export const Column2 = styled.div`
    flex: 25 %;
    padding: 10px;
`;