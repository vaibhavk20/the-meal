import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const MealItem = ({ item }) => {
  console.log(item);
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`meal/${item.idMeal}`)}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      p={5}
    >
      <Image src={item.strMealThumb} alt={item.strMeal} />
      <Text fontSize={"1.5rem"}>{item.strMeal}</Text>
    </Box>
  );
};

export default MealItem;
