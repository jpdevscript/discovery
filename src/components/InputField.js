import React, { Fragment } from "react";
import { string } from "prop-types";
import { Box, Text, Flex } from "rebass";
import { Field } from "react-final-form";
import { Input } from "@rebass/forms";

const InputField = ({ name, validateFor }) => {
  const required = (value) => (value ? undefined : "Required");
  const mustBeNumber = (value) =>
    isNaN(value) ? "Must be a number" : undefined;
  const minValue = (min) => (value) =>
    isNaN(value) || value >= min
      ? undefined
      : `Should be equal or greater than ${min}`;
  const composeValidators = (...validators) => (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

  const getValidate = () => {
    if (validateFor === "require") {
      return required;
    }
    return composeValidators(required, mustBeNumber, minValue(18));
  };
  return (
    <Field name={name} validate={getValidate()}>
      {({ input, meta }) => (
        <Fragment>
          <Flex flexDirection={["column", "column", "row"]}>
            <Box>
              <Input
                {...input}
                sx={{ borderRadius: "5px" }}
                name={name}
                id={name}
              />
            </Box>
            <Box mx={2}>
              {meta.error && meta.touched && (
                <Text fontSize={1} color="primary">
                  {meta.error}
                </Text>
              )}
            </Box>
          </Flex>
        </Fragment>
      )}
    </Field>
  );
};

InputField.propTypes = {
  name: string.isRequired,
  validateFor: string.isRequired,
};

InputField.displayName = "InputField";

export default InputField;
