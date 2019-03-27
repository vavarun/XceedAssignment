export const sortDataNumerically = (data, type, field, sortingOrder) => {
  if (sortingOrder === "asc")
    data.sort((a, b) => {
      return a[type][field] - b[type][field];
    });
  else
    data.sort((a, b) => {
      return b[type][field] - a[type][field];
    });
};
