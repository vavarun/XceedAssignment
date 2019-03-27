export const sortDataAlphabetically = (data, type, field, sortingOrder) => {
  if (sortingOrder === "asc")
    data.sort((a, b) => {
      return a[type]["team"][field].toLowerCase() <
        b[type]["team"][field].toLowerCase()
        ? -1
        : a[type]["team"][field].toLowerCase() >
          b[type]["team"][field].toLowerCase()
        ? 1
        : 0;
    });
  else
    data.sort((a, b) => {
      return b[type]["team"][field].toLowerCase() <
        a[type]["team"][field].toLowerCase()
        ? -1
        : b[type]["team"][field].toLowerCase() >
          a[type]["team"][field].toLowerCase()
        ? 1
        : 0;
    });
};
