import {
    Button,

  Checkbox,

  Flex,
  FormLabel,
  Heading,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { useFilter } from "../context/filterProvider";
import { distinct } from "../utils/filtering";

export const Filters = ({ products }) => {
  const { filter, dispatch } = useFilter();
  const brands = products.map((item) => item.brand).filter(distinct);
  const sizes = ["xs", "s", "m", "l", "xl", "xxl"];
  return (
    <Flex
      flexDirection={"column"}
      alignItems={"flex-start"}
      height={"100vh"}
      position="sticky"
      paddingX={"2rem"}
      width="25%"
    >
      <Flex
        flexDirection={"row"}
        justifyContent={"space-between"}

        alignItems={"center"}
        width="100%"
      >
        <Text fontSize="xl">Filters</Text>
        <Button onClick={() => dispatch({ type: "CLEAR_ALL" })}>
          Clear all
        </Button>
      </Flex>
      <Flex flexDirection={"column"} alignItems="flex-start">
        <p>Sort by price</p>
        <FormLabel>
          <input
            type="radio"
            name="price"
            checked={filter.sortBy === "LOW_TO_HIGH"}
            onChange={() =>
              dispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
            }
          />
          Low to High
        </FormLabel>
        <FormLabel>
          <input
            type="radio"
            name="price"
            checked={filter.sortBy === "HIGH_TO_LOW"}
            onChange={() =>
              dispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
            }
          />
          High to Low
        </FormLabel>
      </Flex>
      <Flex flexDirection={"column"} alignItems="flex-start">
        <p>Brands</p>
        {brands.map((item, idx) => (
          <label key={idx}>
            <Checkbox
              type="checkbox"
              checked={filter.brand.some((value) => value === item)}
              onChange={() => dispatch({ type: "TOGGLE_BRAND", payload: item })}
            >
            {item}</Checkbox>
          </label>
        ))}
      </Flex>
      <Flex flexDirection={"column"} alignItems="flex-start">
        <p>Size</p>
        {sizes.map((item, idx) => (
          <Flex flexDirection={"row"}>
            <label key={idx}>
              <Checkbox
                type="checkbox"
                checked={filter.size.some((value) => value === item)}
                onChange={() =>
                  dispatch({ type: "TOGGLE_SIZE", payload: item })
                }
              >
              {item}</Checkbox>
            </label>
          </Flex>
        ))}
      </Flex>
      <Flex flexDirection={"column"} alignItems="flex-start">
        <p>Ideal for</p>
        <label>
          <input
            type="radio"
            name="ideal"
            checked={filter.idealFor === "men"}
            onChange={() => dispatch({ type: "IDEAL_FOR", payload: "men" })}
          />
          Men
        </label>
        <label>
          <input
            type="radio"
            name="ideal"
            checked={filter.idealFor === "women"}
            onChange={() => dispatch({ type: "IDEAL_FOR", payload: "women" })}
          />
          Women
        </label>
      </Flex>
    </Flex>
  );
};
