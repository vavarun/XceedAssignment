export const sortDataNumerically = (data, field, type, sortingOrder) =>
  sortingOrder === true
    ? data.sort((a, b) => {
        return a[type][field] - b[type][field];
      })
    : data.sort((a, b) => {
        return b[type][field] - a[type][field];
      });
