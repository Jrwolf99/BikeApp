import { useState } from "react";
import { useDataAccess } from "./useDataAccess";

export const useTable = () => {
  const [tableInfo, setTableInfo] = useState([]);
  const [tableTitle, setTableTitle] = useState("");

  const { fetchDBInfo } = useDataAccess();

  const handleSelectTableSubmission = (e) => {
    e.preventDefault();
    setTableTitle(e.target.value);
    fetchDBInfo(e.target.value).then((data) =>
      //setTableInfo to the array inside the response
      setTableInfo(Object.values(data)[0])
    );
  };

  const handleRowDelete = () => {};

  const handleRowEdit = () => {};

  const handleRowAdd = (rowToAdd) => {
    console.log(rowToAdd);
  };

  const getColumnTitles = (tableInfo) => {
    return tableInfo[0] ? Object.keys(tableInfo[0]) : [];
  };

  return {
    handleRowDelete,
    handleRowEdit,
    handleRowAdd,
    handleSelectTableSubmission,
    tableInfo,
    tableTitle,
    getColumnTitles,
  };
};
