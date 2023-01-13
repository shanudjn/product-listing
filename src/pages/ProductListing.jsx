import { useFilter } from "../context/filterProvider";
import { getFilteredProducts } from "../utils/filtering";
import { ProductCard } from "../components/ProductCard";


export const ProductsListing = ({ products }) => {
  const { filter } = useFilter();
  const filteredProducts = getFilteredProducts(products, filter);
  return (
    <div className="grid-container" style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

