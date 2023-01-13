import { Box, Flex, Heading } from "@chakra-ui/react";
import "./App.css";
import { Filters } from "./components/Filters";
import { products } from "./data/products";
import { ProductsListing } from "./pages/ProductListing";

console.log(products);
function App() {
  return (
    <>
      <Heading padding={"2rem"}>The Souq</Heading>
      <Flex className="App" justifyContent={"center"} alignItems={"flex-start"}>
        <Filters products={products} />
        <ProductsListing products={products} width={"60%"} margin={"auto"} />
      </Flex>
    </>
  );
}

export default App;
