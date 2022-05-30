import React from "react";
import {Text,Image,Box,Stack,Heading,Tag,Taglabel} from "@chakra-ui/react"

const Product = ({data}) => {
  const {imageSrc,category , gender,price,title} = data
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <Stack data-cy="product">
      <Image data-cy="product-image" src={imageSrc}/>
      <Text data-cy="product-category">{category}</Text>
      <Tag>
        {/* <TagLabel data-cy="product-gender">{gender}</TagLabel> */}
      </Tag>
      <Heading data-cy="product-title">{title}</Heading>
      <Box data-cy="product-price">{price}</Box>
    </Stack>
  );
};

export default Product;
