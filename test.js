const productsData = {
  pages: [
    {
      data: ["a"],
    },

    {
      data: ["b"],
    },
    {
      data: ["c"],
    },
  ],
};

const array = productsData.pages
  .map((datas) => datas.data.map((data) => data))
  .reduce((acc, cur) => acc.concat(cur));

console.log(array);
