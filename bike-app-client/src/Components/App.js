//imports
import { useState } from "react";
import styled from "styled-components";
import { fetchSaleInfo } from "../utilities/fetchData";
import { Table } from "./Table/Table";

//styles
const StyledApp = styled.div``;
const StyledForm = styled.form`
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 400px;
  margin: auto;

  padding: 1em;
  border-radius: 5px;
`;

function App() {
  const [name, setName] = useState("");
  const [saleInfo, setSaleInfo] = useState({});

  const handleFormSubmission = (e) => {
    e.preventDefault();

    fetchSaleInfo().then((data) => setSaleInfo(data));
  };

  return (
    <StyledApp>
      <StyledForm onSubmit={(e) => handleFormSubmission(e)}>
        <label>
          Test Name Input:
          <input
            type="text"
            id="fname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <button type="submit">submit</button>
      </StyledForm>

      <Table saleInfo={saleInfo} />
    </StyledApp>
  );
}

export default App;
