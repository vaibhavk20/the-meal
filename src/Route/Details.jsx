import { AspectRatio, Box, Heading, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState([]);
  const [yt, setYt] = useState("");
  // console.log(id);

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        // console.log(res);
        setMeal(res.data.meals[0]);

        const strYoutube = res.data.meals[0].strYoutube;
        const str = strYoutube.split("=");
        setYt(str[str.length - 1]);
      });
  }, [id]);

  // console.log(strYoutube);
  // console.log(yt)
  return (
    <Box>
      <Box
        w={"80%"}
        m={"auto"}
        display={"flex"}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        gap={20}
        textAlign={"justify"}
        my={10}
      >
        <Box>
          <Image
            boxSize="250px"
            objectFit="cover"
            src={meal.strMealThumb}
            alt={meal.strMeal}
          />
        </Box>
        <Box fontWeight={700}>
          <Text fontSize={"1.5rem"}>{meal.strMeal}</Text>
          <Text fontSize={"1.5rem"}>Area: {meal.strArea}</Text>
          <Text fontSize={"1.5rem"}>Category: {meal.strCategory}</Text>
        </Box>
      </Box>
      <Box
        w={"80%"}
        m={"auto"}
        display={"flex"}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        gap={20}
        textAlign={"justify"}
        my={10}
      >
        <Box textTransform={"capitalize"} p={5}>
          <Heading>Ingredients</Heading>
          <br />
          <Text>
            {meal.strIngredient1}:{meal.strMeasure1}
          </Text>
          <Text>
            {meal.strIngredient2}:{meal.strMeasure2}
          </Text>
          <Text>
            {meal.strIngredient3}:{meal.strMeasure3}
          </Text>
          <Text>
            {meal.strIngredient4}:{meal.strMeasure4}
          </Text>
          <Text>
            {meal.strIngredient5}:{meal.strMeasure5}
          </Text>
          <Text>
            {meal.strIngredient6}:{meal.strMeasure6}
          </Text>
          <Text>
            {meal.strIngredient7}:{meal.strMeasure7}
          </Text>
          <Text>
            {meal.strIngredient8}:{meal.strMeasure8}
          </Text>
        </Box>

        <Box p={5}>
          <Heading>Instructions</Heading>
          <Text>{meal.strInstructions}</Text>
        </Box>
      </Box>

      {/* video */}
      <Box w={"80%"} m="auto" my={10}>
        {/* <iframe
          width={"720px"}
          height={"480px"}
          title="recipeVideo"
          src={`https://www.youtube.com/embed/${yt}`}
        ></iframe> */}

        <AspectRatio  ratio={16/9}>
          <iframe
            title="RecipeVideo"
            src={`https://www.youtube.com/embed/${yt}`}
            allowFullScreen
          />
        </AspectRatio>
      </Box>
    </Box>
  );
};

export default Details;
