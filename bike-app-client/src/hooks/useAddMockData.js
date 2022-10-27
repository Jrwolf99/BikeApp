export const useAddMockData = () => {
  const mockDataProducts = [
    {
      product_name: "The One Ring Bike",
      manufacturer_name: "Trek Bikes",
      style: "lotr",
      purchase_price: 10000,
      sale_price: 20000,
      qty_on_hand: 1,
      commission_percentage: "0.15",
    },
    {
      product_name: "Road Bike",
      manufacturer_name: "Giant Bicycle",
      style: "Road",
      purchase_price: 199,
      sale_price: 455,
      qty_on_hand: 3,
      commission_percentage: "0.21",
    },
    {
      product_name: "Mountain Bike",
      manufacturer_name: "Giant Bicycle",
      style: "Mountain",
      purchase_price: 107,
      sale_price: 610,
      qty_on_hand: 15,
      commission_percentage: "0.18",
    },
    {
      product_name: "Single Speed Bike",
      manufacturer_name: "Redline",
      style: "Single Speed",
      purchase_price: 333,
      sale_price: 770,
      qty_on_hand: 10,
      commission_percentage: "0.19",
    },
    {
      product_name: "Beach Cruiser",
      manufacturer_name: "Burley",
      style: "Beach",
      purchase_price: 40,
      sale_price: 99,
      qty_on_hand: 43,
      commission_percentage: "0.05",
    },
  ];

  const mockDataSalespersons = [
    {
      first_name: "Jonathan",
      last_name: "Wolf",
      address: "123 Sesame St",
      phone: "901-220-0520",
      start_date: "03/26/2009",
      termination_date: "03/26/2010",
      managerID: 13,
    },
    {
      first_name: "Frodo",
      last_name: "Baggins",
      address: "1 Bag End",
      phone: "120-345-3333",
      start_date: "03/26/2002",
      termination_date: "03/26/2010",
      managerID: 12,
    },
    {
      first_name: "Samwise",
      last_name: "Gamgee",
      address: "1 Bagshot Row",
      phone: "554-276-0520",
      start_date: "11/22/2012",
      termination_date: "03/26/2018",
      managerID: 13,
    },
    {
      first_name: "Meriadoc",
      last_name: "Brandybuck",
      address: "Brandy Hall",
      phone: "111-111-1111",
      start_date: "01/23/2009",
      termination_date: "03/26/2015",
      managerID: 12,
    },
    {
      first_name: "Peregrin",
      last_name: "Took",
      address: "Great Smials",
      phone: "221-220-2222",
      start_date: "01/12/2003",
      termination_date: "03/20/2014",
      managerID: 13,
    },
  ];

  const mockDataCustomers = [
    {
      first_name: "Aragorn II",
      last_name: "Elessar",
      address: "Gondor",
      phone: "123-456-7890",
      start_date: "03/26/2009",
    },
    {
      first_name: "Elrond",
      last_name: "Elf",
      address: "Rivendell",
      phone: "120-345-3333",
      start_date: "03/26/2002",
    },
    {
      first_name: "Galadriel",
      last_name: "Elf",
      address: "Eregion",
      phone: "554-276-0520",
      start_date: "11/22/2012",
    },
    {
      first_name: "Gandalf",
      last_name: "Wizard",
      address: "Everywhere",
      phone: "111-111-1111",
      start_date: "01/23/2009",
    },
    {
      first_name: "Saruman",
      last_name: "Wizard",
      address: "Isengard",
      phone: "221-220-2222",
      start_date: "01/12/2003",
    },
  ];

  const mockDataSales = [
    {
      ProductID: 1,
      SalespersonID: 1,
      CustomerID: 1,
      sale_date: "10/26/2007",
    },
    {
      ProductID: 3,
      SalespersonID: 2,
      CustomerID: 2,
      sale_date: "10/27/2007",
    },
    {
      ProductID: 3,
      SalespersonID: 2,
      CustomerID: 3,
      sale_date: "10/28/2007",
    },
    {
      ProductID: 4,
      SalespersonID: 3,
      CustomerID: 5,
      sale_date: "10/29/2007",
    },
    {
      ProductID: 5,
      SalespersonID: 5,
      CustomerID: 4,
      sale_date: "10/29/2007",
    },
  ];

  const getMockData = (tableName) => {
    if (tableName === "salesperson") {
      return mockDataSalespersons;
    }
    if (tableName === "product") {
      return mockDataProducts;
    }
    if (tableName === "customer") {
      return mockDataCustomers;
    }
    if (tableName === "sale") {
      return mockDataSales;
    }
  };

  return {
    getMockData,
  };
};
