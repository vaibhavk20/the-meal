import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"space-between"}
      px={32}
      flexDirection={{ base: "column", md: "column", lg: "row" }}
      bg={"gray.300"}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
      py={2}
    >
      <Box>
        <Link to="/">
          <Heading>The Meal</Heading>
        </Link>
      </Box>
      <Box
        display={"flex"}
        gap={{ base: 2, md: 5, lg: 10 }}
        flexDirection={{ base: "column", md: "column", lg: "row" }}
        fontWeight={700}
      >
        {/* <Link to="/">Home</Link> */}
        {/* <Link to="/meal">Meal</Link> */}
        {/* <Link to="/">Home</Link> */}
      </Box>
    </Box>
  );
};

export default Navbar;
