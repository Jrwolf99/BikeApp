export const useDataAccess = () => {
  const getAllDBInfo = async (tableTitle) => {
    console.log(tableTitle);
    const response = await fetch(
      `http://bikeapp-api-server.herokuapp.com/${tableTitle}`
    );
    const tableInfo = await response.json();
    console.log("retrieved table info", tableInfo);
    return tableInfo;
  };

  const postDBInfo = async (tableTitle, bodyToSend) => {
    const response = await fetch(
      `http://bikeapp-api-server.herokuapp.com/${tableTitle}`,
      {
        method: "POST",
        body: JSON.stringify(bodyToSend),
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
      }
    );
    const tableInfo = await response.json();
    console.log("sent table info", tableInfo);
    return tableInfo;
  };

  const deleteDBInfo = async (tableTitle, rowID) => {
    const response = await fetch(
      `http://bikeapp-api-server.herokuapp.com/${tableTitle}/${rowID}`,
      {
        method: "DELETE",
      }
    );
    const tableInfo = await response.json();
    console.log("deleted tabled info", tableInfo);
    return tableInfo;
  };

  const updateDBInfo = async (tableTitle, bodyToSend, rowID) => {
    const response = await fetch(
      `http://bikeapp-api-server.herokuapp.com/${tableTitle}/${rowID}`,
      {
        method: "PATCH",
        body: JSON.stringify(bodyToSend),
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
      }
    );
    const tableInfo = await response.json();
    console.log("updated table info", tableInfo);
    return tableInfo;
  };

  return { getAllDBInfo, postDBInfo, deleteDBInfo, updateDBInfo };
};
