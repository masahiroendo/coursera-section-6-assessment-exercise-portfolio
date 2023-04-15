import { Avatar, Heading, Text, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => {
  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#2A4365"
    >
      <VStack mb={8} gap={1}>
        <Avatar name="pete" src="https://i.pravatar.cc/150?img=7" size="4xl" />
        <Text fontWeight="bold">{greeting}</Text>
      </VStack>
      <VStack>
        <Heading>{bio1}</Heading>
        <Heading>{bio2}</Heading>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
