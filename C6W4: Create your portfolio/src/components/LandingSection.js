import React from "react";
import { Avatar, Heading, VStack, Box } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar name="Pete" src="https://i.pravatar.cc/150?img=7" size="xl" />
      <Heading as="h5" size="sm" h="50px">
        {greeting}
      </Heading>
      <Heading as="h2" size="xl">
        {bio1}
      </Heading>
      <Heading as="h2" size="xl">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
