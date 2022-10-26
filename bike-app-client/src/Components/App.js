//imports
import { useState } from "react";
import styled from "styled-components";
import { useTable } from "../hooks/useTable";
import { Modal } from "./Modal/Modal";
import { SelectTable } from "./SelectTable/SelectTable";
import { Table } from "./Table/Table";

//styles
const StyledApp = styled.div``;
const StyledBody = styled.div`
  margin: 0.4rem;
`;

function App() {
  const {
    handleRowDelete,
    handleRowEdit,
    handleRowAdd,
    handleSelectTableSubmission,
    tableInfo,
    tableTitle,
    getColumnTitles,
  } = useTable();

  const [isEdittingRow, setIsEdittingRow] = useState(false);

  return (
    <>
      {isEdittingRow && (
        <Modal
          setIsEdittingRow={setIsEdittingRow}
          columnTitles={getColumnTitles(tableInfo)}
          handleRowAdd={handleRowAdd}
        />
      )}

      <StyledApp>
        <SelectTable
          tableTitle={tableTitle}
          handleSelectTableSubmission={handleSelectTableSubmission}
        />
        {
          <StyledBody>
            <button onClick={() => setIsEdittingRow(true)}>Add a Row</button>
            <Table
              handleRowDelete={handleRowDelete}
              handleRowEdit={handleRowEdit}
              tableInfo={tableInfo}
            />
          </StyledBody>
        }
      </StyledApp>
    </>
  );
}

export default App;
