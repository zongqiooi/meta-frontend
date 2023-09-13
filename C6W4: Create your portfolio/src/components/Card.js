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
      <VStack alignItems="flex-start" p={5} spacing={5}>
        <Heading as="h4" size="md">
          {title}
        </Heading>
        <Text fontSize="lg" color="#64748b">
          {description}
        </Text>
        <HStack fontSize="md">
          <Text>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} size="1x" color="black" />
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
