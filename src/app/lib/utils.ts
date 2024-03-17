export const validateBooking = (value: unknown, maxLength: number) => {
  if (
    !value ||
    (typeof value !== "string" && typeof value !== "number") ||
    (typeof value === "string" && value.length > maxLength)
  ) {
    return false;
  }

  return true;
};


// This function is used to get the error message from an error object. It checks if the error is an instance of the Error class, if it is an object with a message property, if it is a string, or if it is an unknown error. It returns the error message as a string.
export const getErrorMessage = (error: unknown): string => {
    let message: string;
  
    if (error instanceof Error) {
      message = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
      message = String(error.message);
    } else if (typeof error === "string") {
      message = error;
    } else {
      message = "An unknown error occurred";
    }
    return message;
  };
  
