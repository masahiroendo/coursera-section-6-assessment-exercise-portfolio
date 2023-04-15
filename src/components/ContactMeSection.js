import { Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

export default function ContactMeSection() {
  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact Form
        </Heading>
      </VStack>{" "}
    </FullScreenSection>
  );
}
