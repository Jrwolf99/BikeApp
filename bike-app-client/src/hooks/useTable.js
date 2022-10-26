import { useState } from "react";
import { useDataAccess } from "./useDataAccess";

export const useTable = () => {
  const [tableInfo, setTableInfo] = useState([]);
  const [tableTitle, setTableTitle] = useState("");

  const { getAllDBInfo, postDBInfo, deleteDBInfo, updateDBInfo } =
    useDataAccess();

  const refreshTable = (tableName) => {
    getAllDBInfo(tableName).then((data) =>
      //setTableInfo to the array inside the response
      setTableInfo(Object.values(data)[0])
    );
  };

  const handleSelectTableSubmission = (e) => {
    e.preventDefault();
    setTableTitle(e.target.value);
    refreshTable(e.target.value);
  };

  const handleRowDelete = (rowID) => {
    deleteDBInfo(tableTitle, rowID);
    refreshTable(tableTitle);
  };

  const handleRowEdit = () => {};

  const handleRowAdd = (rowToAdd) => {
    console.log(rowToAdd);
    postDBInfo(tableTitle, rowToAdd);
    refreshTable(tableTitle);
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
