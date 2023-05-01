import React, { useEffect } from "react";
import FullScreenSection from "./FullScreenSection";
import { ErrorMessage, useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from "yup";
import useSubmit from "../hooks/useSubmit";
import { useAlertContext } from "../context/alertContext";

export default function ContactMeSection() {
  const { isLoading, response, submit } = useSubmit();
  const { onOpen } = useAlertContext();

  const { errors, handleSubmit, getFieldProps, touched, resetForm } = useFormik(
    {
      initialValues: {
        firstName: "",
        email: "",
        type: "hireMe",
        message: "",
      },
      onSubmit: (values) => {
        submit("", values);
      },
      validationSchema: Yup.object({
        firstName: Yup.string()
          .min(2, "Must be at least 2 characters")
          .required("Field required"),
        email: Yup.string()
          .email("Please enter a valid email")
          .required("Field required"),
        type: Yup.string()
          .oneOf(["hireMe", "openSource", "other"])
          .optional("optional"),
        message: Yup.string()
          .min(4, "Your message must contains at least 5 characters")
          .required("Field required"),
      }),
    }
  );

  useEffect(() => {
    if (!response.type || !response.message) {
      return;
    }
    console.log(response.type, response.message);
    if (response.type === "success") {
      resetForm();
    }
    onOpen(response.type, response.message);
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
      id="contactme-section"
    >
      <VStack w="1024px" px={32} alignItems="flex-start">
        <Heading as="h1">Contact me</Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={errors.firstName && touched.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...getFieldProps("firstName")}
                />
                {errors.firstName && touched.firstName && (
                  <FormErrorMessage>{errors.firstName}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors.email && touched.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  {...getFieldProps("email")}
                />
                {errors.email && touched.email && (
                  <FormErrorMessage>{errors.email}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors.type && touched.type}>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select
                  id="type"
                  name="type"
                  placeholder="Select an enquiry type"
                  {...getFieldProps("type")}
                >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
                {errors.type && touched.type && (
                  <ErrorMessage>{errors.type}</ErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={errors.message && touched.message}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea
                  id="comment"
                  name="comment"
                  height={250}
                  {...getFieldProps("message")}
                />
                {errors.message && touched.message && (
                  <FormErrorMessage>{errors.message}</FormErrorMessage>
                )}
              </FormControl>
              <Button
                type="submit"
                colorScheme="purple"
                width="full"
                isLoading={isLoading}
              >
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
}
