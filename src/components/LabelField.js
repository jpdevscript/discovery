import React from "react";
import { string } from "prop-types";

import { Label } from "@rebass/forms";

const LabelField = ({ label }) => <Label htmlFor={label}>{label}</Label>;

LabelField.propTypes = {
  label: string.isRequired,
};

LabelField.displayName = "LabelField";

export default LabelField;
