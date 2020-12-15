import React from "react";
import { Box } from "rebass";

import ItalicText from "./ItalicText";

const Information = () => {
  return (
    <Box marginBottom={3}>
      <ItalicText>* All input fields are validated for required</ItalicText>
      <ItalicText>
        * Age field validated for number, at-least 18 years of age to call
        SpaceX api
      </ItalicText>
      <ItalicText>
        * Appropriate validation message display while giving input (i.e Age)
      </ItalicText>
      <ItalicText>* Used rebass over styled-components for styling</ItalicText>
      <ItalicText>* Responsive UI for mobile & desktop</ItalicText>
      <ItalicText>
        * Used redux, redux-actions, redux-saga for state management, actions &
        managing side effects
      </ItalicText>
      <ItalicText>* For state-immutable used immer</ItalicText>
      <ItalicText>* Used generator fuction in redux-saga</ItalicText>
      <ItalicText>
        * Handle success response & error in services as well in saga for
        fetching SpaceX API
      </ItalicText>
      <ItalicText>* Display loader while fetch request is on</ItalicText>
      <ItalicText>
        * Display details & image from fetched API or error message if failed
      </ItalicText>
    </Box>
  );
};

Information.displayName = "Information";

export default Information;
