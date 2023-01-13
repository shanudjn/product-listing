export const getFilteredProducts = (data, filter) => {
  let products = [...data];
  if (filter.sortBy) {
    if (filter.sortBy === "LOW_TO_HIGH") {
      products.sort((a, b) => a.price - b.price);
    } else if (filter.sortBy === "HIGH_TO_LOW") {
      products.sort((a, b) => b.price - a.price);
    }
  }
  if (filter.idealFor) {
    products = products.filter(
      (product) => product.idealFor === filter.idealFor
    );
  }
  if (filter.brand.length > 0) {
    products = products.filter((product) =>
      filter.brand.includes(product.brand)
    );
  }
  if (filter.size.length > 0) {
    products = products.filter((product) => {
      return product.size.some((size) => filter.size.includes(size));
    });
  }
  return products;
};

export const distinct = (value, index, self) => self.indexOf(value) === index;
