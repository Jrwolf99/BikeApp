import React from 'react'
import styled from 'styled-components'
import { useTable } from '../../hooks/useTable';



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


export const Table = ({ tableInfo, handleRowDelete, handleRowEdit }) => {

    const { getColumnTitles } = useTable();
    const labels = getColumnTitles(tableInfo);

    return (
        <StyledTable>
            <thead>
                <tr>
                    <th>Actions</th>
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
                        const rowArr = Object.values(row);
                        return (
                            <tr key={rowArr[0]}>
                                <td>
                                    <button onClick={handleRowEdit}>Edit</button>
                                    <button onClick={handleRowDelete}>Delete</button>
                                </td>
                                {rowArr.map((element, index) => {
                                    return <td key={index}>{element}</td>
                                })
                                }
                            </tr>
                        );
                    })
                }
            </tbody>
        </StyledTable >
    )
}
