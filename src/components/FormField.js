import React from "react";
import { Box, Flex } from "rebass";
import { string } from "prop-types";

import LabelField from "./LabelField";
import InputField from "./InputField";

const FormField = ({ name, label, validateFor }) => {
  return (
    <Flex my={10} flexDirection={["column", "column", "row"]}>
      <Box width={[1, 1, 1 / 4]}>
        <LabelField label={label} />
      </Box>
      <Box width={[1, 1, 1 / 3]}>
        <InputField validateFor={validateFor} name={name} />
      </Box>
    </Flex>
  );
};

FormField.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  validateFor: string.isRequired,
};
FormField.displayName = "FormField";

export default FormField;
