import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

export const ProductCard = ({ product }) => {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={product.image}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3" align={"flex-start"}>
          <Heading size="md">{product.name}</Heading>
          <Text>{product.brand}</Text>
          <Text color="blue.600" fontSize="2xl">
            &#8377;{product.price}
          </Text>
          <Text>Available Sizes : {product.size.join(', ')}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};
