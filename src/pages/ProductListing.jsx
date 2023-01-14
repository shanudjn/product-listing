import { useFilter } from "../context/filterProvider";
import { getFilteredProducts } from "../utils/filtering";
import { ProductCard } from "../components/ProductCard";
import { Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";

export const ProductsListing = ({ products }) => {
  const { filter } = useFilter();
  const filteredProducts = getFilteredProducts(products, filter);
  return (
    <>
      {filteredProducts.length > 0 ? (
        <SimpleGrid columns={4} spacing={5} width="75%" paddingX={"2rem"}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      ) : (
        <Flex width={"75%"} alignItems="center" justifyContent={"center"}>
          <Heading as="h5" size="md">
            There are no items
          </Heading>
        </Flex>
      )}
    </>
  );
};
