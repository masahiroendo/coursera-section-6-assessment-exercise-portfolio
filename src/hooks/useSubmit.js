import { useState } from "react";

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const useSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState({ type: "", message: "" });

  const submit = async (value, action) => {
    const random = Math.random();
    setIsLoading(true);
    try {
      await wait(1000);
      if (random < 0.2) {
        throw new Error("Something went wrong");
      }
      setResponse({
        type: "success",
        message: `Thank you for your submission ${value.firstName}, we will get back to you shortly!`,
      });
    } catch (error) {
      setResponse({
        type: "error",
        message: "Something went wrong, please try again later!",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, response, submit };
};

export default useSubmit;
