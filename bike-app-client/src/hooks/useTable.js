import { useState } from "react";
import { useAddMockData } from "./useAddMockData";
import { useDataAccess } from "./useDataAccess";

export const useTable = () => {
  const [tableInfo, setTableInfo] = useState([]);
  const [tableTitle, setTableTitle] = useState("");

  const { getMockData } = useAddMockData();

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

  const handleRowEdit = (rowToAdd, rowID) => {
    updateDBInfo(tableTitle, rowToAdd, rowID);
    refreshTable(tableTitle);
  };

  const handleRowAdd = (rowToAdd) => {
    postDBInfo(tableTitle, rowToAdd);
    refreshTable(tableTitle);
  };

  const getColumnTitles = (tableInfo) => {
    return tableInfo[0] ? Object.keys(tableInfo[0]) : [];
  };

  const addMockData = () => {
    const mockData = getMockData(tableTitle);
    mockData &&
      mockData.forEach((row) => {
        handleRowAdd(row);
      });
    refreshTable(tableTitle);
  };

  return {
    handleRowDelete,
    handleRowEdit,
    handleRowAdd,
    handleSelectTableSubmission,
    tableInfo,
    tableTitle,
    getColumnTitles,
    refreshTable,
    addMockData,
  };
};
