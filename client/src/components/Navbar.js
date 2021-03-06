import React from "react"
import { Box, Text, Heading, Image } from "gestalt"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="around"
      height={70}
      color="midnight"
      padding={1}
      // shape="roundedBottom"
    >
      {/* Sigin In Link */}
      <NavLink activeClassName="active" to="/signin">
        <Text size="x1" color="white">
          Sign In
        </Text>
      </NavLink>

      {/* Sigin In Link */}
      <NavLink activeClassName="active" exact to="/">
        <Box display="flex" alignItems="center">
          <Box margin={2} height={50} width={50}>
            <Image
              src="./icons/logo.svg"
              alt="BrewHaha Logo"
              naturalHeight={1}
              naturalWidth={1}
            />
          </Box>
          <Heading size="xs" color="orange">
            BrewHaha
          </Heading>
        </Box>
      </NavLink>

      {/* Sigup In Link */}
      <NavLink activeClassName="active" to="/signup">
        <Text size="x1" color="white">
          Sign Up
        </Text>
      </NavLink>
    </Box>
  )
}

export default Navbar
