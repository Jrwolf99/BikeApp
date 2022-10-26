import React, { useState } from 'react'
import styled from 'styled-components'

const StyledModal = styled.div`

    position: absolute;
    background-color: #0e0e0e4c;
    height: 100vh;
    width: 100vw;
    z-index: 1;

`;

const StyledFloater = styled.div`

    padding: 1em;
    margin: 4rem auto ;
    background-color: white;
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: rgba(0, 0, 0, 0.228) 0 1px 3px 0;
    border-radius: 3px;
    max-width: 50vw;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > form {
        padding: 1em 0;
        display: flex;
        flex-direction: column;
        gap: 20px;

        &>label {
            display: flex;
            flex-direction: column;
        }

    }

`;



export const Modal = ({ setIsEdittingRow, columnTitles, handleRowAdd }) => {

    const [rowToAdd, setRowToAdd] = useState({});

    return (
        <StyledModal>
            <button onClick={() => setIsEdittingRow(false)}>Close</button>
            <StyledFloater>
                <h3>Add a New Row</h3>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleRowAdd(rowToAdd);
                    setIsEdittingRow(false);
                }}>
                    {
                        columnTitles.map((columntitle, index) => {
                            if (index === 0) return <span key={columntitle} />
                            return <label
                                key={columntitle}
                            >
                                Enter {columntitle}:{" "}
                                <input type="text" placeholder={columntitle} onChange={(e) => {
                                    let tempRow = { ...rowToAdd };
                                    tempRow[columntitle] = e.target.value;
                                    setRowToAdd(tempRow);
                                }} />
                            </label>
                        })
                    }
                    <button>Submit</button>
                </form>

            </StyledFloater>
        </StyledModal>
    )
}
