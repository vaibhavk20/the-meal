import { Box, Button, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MealItem from "../Components/MealItem";

const Home = () => {
  const [meal, setMeal] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        // console.log(res);
        setMeal(res.data.meals);
      });
  }, []);

  const handleSearch = () => {
    axios
      .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      .then((res) => {
        // console.log(res);
        setMeal(res.data.meals);
        setSearch("");
      });
  };
  console.log(meal);
  return (
    <Box>
      {/* search Box */}
      <Box
        display={"flex"}
        w={{ base: "90%", md: "80%", lg: "40%" }}
        m={"auto"}
        gap={5}
        my={10}
      >
        <Input
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Button onClick={handleSearch}>Search</Button>
      </Box>

      {/* display data */}
      <Box
        display={"grid"}
        w={"90%"}
        m={"auto"}
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          md: "repeat(2,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap={5}
      >
        {meal.map((item, i) => (
          <MealItem item={item} key={i} />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
