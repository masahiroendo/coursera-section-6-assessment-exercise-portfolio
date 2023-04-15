import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const ProjectCard = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
    <VStack>
      <Box>
        <Image src={imageSrc} borderRadius="lg" maxW="md" />
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
        <Link href="https://chakra-ui.com">
          <HStack gap={1}>
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </Link>
      </Box>
    </VStack>
  );
};

export default ProjectCard;
