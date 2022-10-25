export const fetchSaleInfo = async () => {
  const response = await fetch("http://localhost:3000/");
  const salesInfo = await response.json();
  return salesInfo;
};
