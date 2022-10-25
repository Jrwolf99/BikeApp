import React from 'react'
import styled from 'styled-components'



const StyledTable = styled.table`


  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 700px;


 td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

`;


export const Table = ({ saleInfo }) => {


    return (


        // <div>{JSON.stringify(saleInfo)}</div>


        <StyledTable>

            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                </tr>
            </thead>

            <tbody>

                {
                    saleInfo.names && saleInfo.names.map((name) => {
                        return (
                            <tr key={name.id}>
                                <td>{name.firstname}</td>
                                <td>{name.lastname}</td>
                            </tr>
                        );
                    })
                }




            </tbody>
        </StyledTable>
    )
}
