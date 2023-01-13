import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useFilter } from "../context/filterProvider";
import { distinct } from "../utils/filtering";


export const Filters = ({ products }) => {
    const { filter, dispatch } = useFilter();
    const brands = products.map((item) => item.brand).filter(distinct);
    const sizes = ["xs", "s", "m", "l", "xl", "xxl"];
    return (
        <Flex flexDirection={"column"} alignItems={"flex-start"} height={"100vh"} position="sticky" paddingX={"2rem"} border={"1px solid red"} width="40%">
            <Flex flexDirection={"row"} justifyContent={"space-between"} border={"1px solid red"} width="100%">
                <Text fontSize='xl'>Filters</Text>
                <button
                    onClick={() => dispatch({ type: "CLEAR_ALL" })}
                >
                    Clear all
                </button>
            </Flex>
            <Flex flexDirection={"column"}>
                <p>Sort by price</p>
                <label>
                    <input
                        type="radio"
                        name="price"
                        checked={filter.sortBy === "LOW_TO_HIGH"}
                        onChange={() =>
                            dispatch({ type: "SORT_BY", payload: "LOW_TO_HIGH" })
                        }
                    />
                    Low to High
                </label>
                <label>
                    <input
                        type="radio"
                        name="price"
                        checked={filter.sortBy === "HIGH_TO_LOW"}
                        onChange={() =>
                            dispatch({ type: "SORT_BY", payload: "HIGH_TO_LOW" })
                        }
                    />
                    High to Low
                </label>
            </Flex>
            <Flex flexDirection={"column"} alignItems='flex-start'>
                <p>Brands</p>
                {brands.map((item, idx) => (
                    <label key={idx}>
                        <input
                            type="checkbox"
                            checked={filter.brand.some((value) => value === item)}
                            onChange={() => dispatch({ type: "TOGGLE_BRAND", payload: item })}
                        />
                        {item}
                    </label>
                ))}
            </Flex>
            <Flex flexDirection={"column"}alignItems='flex-start'>
                
                <p>Size</p>
                {sizes.map((item, idx) => (
                    <Flex flexDirection={"row"}>
                    <label key={idx}>
                        <input
                            type="checkbox"
                            checked={filter.size.some((value) => value === item)}
                            onChange={() => dispatch({ type: "TOGGLE_SIZE", payload: item })}
                            
                        />
                        {item}
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
                        checked={filter.ideal === "men"}
                        onChange={() => dispatch({ type: "IDEAL_FOR", payload: "men" })}
                    />
                    Men
                </label>
                <label>
                    <input
                        type="radio"
                        name="ideal"
                        checked={filter.ideal === "women"}
                        onChange={() => dispatch({ type: "IDEAL_FOR", payload: "women" })}
                    />
                    Women
                </label>
            </Flex>
        </Flex>
    );
};
