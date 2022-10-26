export const useDataAccess = () => {
  const fetchDBInfo = async (tableTitle) => {
    console.log(tableTitle);
    const response = await fetch(`http://localhost:3000/${tableTitle}`);
    const tableInfo = await response.json();
    console.log("retrieved table info", tableInfo);
    return tableInfo;
  };

  return { fetchDBInfo };
};
