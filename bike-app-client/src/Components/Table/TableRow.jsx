import React, { useState } from 'react'
import { EdittableRowField } from './EdittableRowField';

export const TableRow = ({ tableTitle, rowVals, rowKeys, handleRowDelete, handleRowEdit }) => {
    const [showEdit, setShowEdit] = useState(false);
    const [newRow, setNewRow] = useState({});


    const handleSaveRow = () => {
        console.log("editting row: ", rowVals[0], newRow)
        setShowEdit(false);
        if (Object.keys(newRow).length > 0) {
            handleRowEdit(newRow, rowVals[0]);
        }
    }

    return (
        <tr>
            {(tableTitle !== "sale/organized") && <td>
                {
                    showEdit ?
                        <button onClick={handleSaveRow}>Save</button>
                        :
                        <>
                            <button onClick={() => setShowEdit(true)}>Edit</button>
                            <button onClick={() => handleRowDelete(rowVals[0])}>Delete</button>
                        </>
                }
            </td>}
            {
                rowVals && rowVals.map((fieldValue, index) => {
                    if (index === 0) return <td key={index}>{fieldValue}</td>
                    return showEdit ?
                        <EdittableRowField key={index} fieldValue={fieldValue} newRow={newRow} setNewRow={setNewRow} rowKey={rowKeys[index]} />
                        :
                        <td key={index}>{fieldValue}</td>
                })
            }
        </tr>
    )
}
