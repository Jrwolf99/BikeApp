import React, { useState } from 'react'

export const EdittableRowField = ({ fieldValue, newRow, setNewRow, rowKey }) => {
    const [textValue, setTextValue] = useState(fieldValue);
    const handleTextChange = (e) => {
        setTextValue(e.target.value);
        let tempRow = { ...newRow };
        tempRow[rowKey] = e.target.value;
        setNewRow(tempRow);
    }
    return (
        <td>
            <input
                type="text"
                value={textValue || ""}
                onChange={handleTextChange}
            /></td>
    )
}
