import React from 'react'
import styled from 'styled-components'
import { useTable } from '../../hooks/useTable';
import { TableRow } from './TableRow';



const StyledTable = styled.table`


  font-family: arial, sans-serif;
  border-collapse: collapse;
  border-radius: 5px;
  width: 100%;
  min-width: 1000px;

 td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}
th {
    font-size: clamp(.8rem, .5vw, 3rem);
    background-color: aliceblue;

}

`;


export const Table = ({ tableTitle, tableInfo, handleRowDelete, handleRowEdit }) => {

    const { getColumnTitles } = useTable();
    const labels = getColumnTitles(tableInfo);

    return (
        <StyledTable>
            <thead>
                <tr>
                    {(tableTitle !== "sale/organized") && <th>Actions</th>}
                    {
                        labels.map((label) => {
                            return <th
                                key={label}
                            >
                                {label}
                            </th>
                        })
                    }
                </tr>
            </thead>
            <tbody>

                {
                    tableInfo && tableInfo.map((row) => {
                        const rowVals = Object.values(row);
                        const rowKeys = Object.keys(row);
                        return (
                            <TableRow
                                key={rowVals[0]}
                                tableTitle={tableTitle}
                                rowVals={rowVals}
                                rowKeys={rowKeys}
                                handleRowDelete={handleRowDelete}
                                handleRowEdit={handleRowEdit} />
                        );
                    })
                }
            </tbody>
        </StyledTable >
    )
}
