import { useFilter } from "../context/filterProvider";
import { getFilteredProducts } from "../utils/filtering";
import { ProductCard } from "../components/ProductCard";
import { SimpleGrid } from "@chakra-ui/react";


export const ProductsListing = ({ products }) => {
  const { filter } = useFilter();
  const filteredProducts = getFilteredProducts(products, filter);
  return (
    <SimpleGrid  columns={4} spacing={5} width="75%" paddingX={"2rem"}>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  );
};

