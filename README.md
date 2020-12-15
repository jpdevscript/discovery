## Information about repo

For run Project:

- yarn install
- yarn start ( & browse @ http://localhost:3000)

#### Features

- All input fields are validated for required
- Age field validated for number, at-least 18 years of age to call SpaceX api
- Appropriate validation message display while giving input (i.e Age)
- Used rebass over styled-components for styling
- Responsive UI for mobile & desktop
- Used redux, redux-actions, redux-saga for state management, actions & managing side effects
- For state-immutable used immer
- Used generator function in redux-saga
- Handle success response & error in services as well in saga for fetching SpaceX API
- Display loader while fetch request is on
- Display details & image from fetched API or error message if failed

#### Project Structure

```
-src
	-components
		-DisplaySpaceXImageOrError
		-FormField
		-Information
		-InputField
		-ItalicText
		-LabelField
		-Loader
	-contants
		-index
	-containers
	    -main
	        -actions
	        -index
	        -reducer
	        -saga
	        -services
	-store
	    -configureStore
	    -reducers
	    -rootSaga
	-index
```
