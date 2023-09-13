import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      color="black"
      backgroundColor="white"
      curosr="pointer"
      borderRadius="xl"
    >
      <Image src={imageSrc} alt={title} borderRadius="xl" />
      <Heading as="h2" size="xl">
        {title}
      </Heading>
      <Text fontSize="lg" color="light-grey">
        {description}
      </Text>
      <HStack>
        <Text fontSize="lg">See more</Text>
        <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
      </HStack>
    </VStack>
  );
};

export default Card;
