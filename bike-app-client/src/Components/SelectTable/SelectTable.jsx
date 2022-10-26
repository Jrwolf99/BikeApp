import React from 'react'
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  justify-content: start;
  background-color: aliceblue;
  align-items: center;
  gap: 20px;

  padding: 1em;
  border-radius: 5px;
`;


export const SelectTable = ({ handleSelectTableSubmission, tableTitle }) => {

    return (
        <StyledForm>
            {tableTitle.length > 0 && (
                <h2>
                    {tableTitle.charAt(0).toUpperCase() + tableTitle.slice(1) + "s"}
                </h2>
            )}
            <label>
                Choose a table to view:
                <select
                    defaultValue="select option"
                    onChange={(e) => handleSelectTableSubmission(e)}
                >
                    <option value="select option" disabled>
                        select option
                    </option>

                    <option defaultValue value="salesperson">
                        Salespersons
                    </option>
                    <option value="product">Products</option>
                    {/* <option value="customer">Customers</option> */}
                    {/* <option value="sale">Sales</option> */}
                    {/* <option value="discount">Discounts</option> */}
                </select>
            </label>
        </StyledForm>
    )
}
