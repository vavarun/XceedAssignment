export const sortDataAlphabetically = (data, field, type, sortingOrder) =>
  sortingOrder === true
    ? data.sort((a, b) => {
        return a[type]["team"][field].toLowerCase() <
          b[type]["team"][field].toLowerCase()
          ? -1
          : a[type]["team"][field].toLowerCase() >
            b[type]["team"][field].toLowerCase()
          ? 1
          : 0;
      })
    : data.sort((a, b) => {
        return b[type]["team"][field].toLowerCase() <
          a[type]["team"][field].toLowerCase()
          ? -1
          : b[type]["team"][field].toLowerCase() >
            a[type]["team"][field].toLowerCase()
          ? 1
          : 0;
      });
