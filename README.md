* Components
Don't use any third-party packages other than packages mentioned in the Quick Tips

For Mini Projects, you have to use normal HTML elements to style the React Components. Usage of styled-components (CSS in JS) to style React components are not supported in Mini Projects. Test cases won't be passed, if you use styled-components

Refer to the below Example for the usage of testid in the HTML elements

Example: <div testid="countryWideConfirmedCases" className="country-wide-confirmed-cases"/>
Get all states data from the response of Get Countrywide covid19 cases API by mapping the state's list that we have provided you in the App.js file

If you receive any type of covid19 cases count of a state as undefined from the API call, store that value as 0

Example:- You have received the confirmed cases count, population for the State Goa as undefined so instead of storing undefined store confirmed cases of Goa as 0. Like this for all states and districts store 0 if you receive any count as undefined

Your code will contain a Counter Component in the path src/components you can modify the component based on your use case or you can ignore it

Formulae for active cases activeCases = confirmedCases-(recoveredCases+deceasedCases)

Adding individual states Covid19 data will give you national wide Covid19 data

Don't wrap the Bar Chart or Line Chart with ResponsiveContainer

-->Routes:

The Home Route should contain the pathname as /

The State-specific Route should contain the pathname as /state/:stateCode

Note: use the particular state code in place of id
The About Route should contain the pathname as /about

-->Header:

Your code should contain a Header Component in the path src/components
Footer:

Your code should contain a Footer Component in the path src/components

The Footer component should consist of all social icons from the react-icons third-party library

The Footer component should consist of the VscGithubAlt react icon

The Footer component should consist of the FiInstagram react icon

The Footer component should consist of the FaTwitter react icon

-->Home Route:

The Loader container should contain the test id with value as homeRouteLoader

The States Search results unordered list should contain the test id with value as searchResultsUnorderedList

The Search bar should contain the BsSearch react icon

The State Search results list item should contain a BiChevronRightSquare react icon

The Confirmed cases card should contain the test id with value as countryWideConfirmedCases

The Confirmed cases image in the Confirmed cases container should contain the alt text as country wide confirmed cases pic

The Recovered cases card should contain the test id with value as countryWideRecoveredCases

The Recovered cases image in the Recovered cases container should contain the alt text as country wide recovered cases pic

The Active cases card should contain the test id with value as countryWideActiveCases

The Active cases image in the Active cases container should contain the alt text as country wide active cases pic

The Deceased cases card should contain the test id with value as countryWideDeceasedCases

The Deceased cases image in the Deceased cases container should contain the alt text as country wide deceased cases pic

The Statewise covid19 data table should contain the test id with value as stateWiseCovidDataTable

The FcGenericSortingAsc react icon should be wrapped with an HTML button element and the Button should contain the test id value as ascendingSort

The FcGenericSortingDesc react icon should be wrapped with an HTML button element and the Button should contain the test id value as descendingSort

Example:

HTML
Place the ascending sort icon and descending sort icon in an HTML container element with the test id attribute value stateWiseCovidDataTable

Place the total countrywide confirmed cases count, the text Confirmed and the image of the confirmed case inside of the HTML container element with the test id attribute value countryWideConfirmedCases

Place the total countrywide active cases count, the text Active and the image of the active case inside of the HTML container element with the test id attribute value countryWideActiveCases

Place the total countrywide recovered cases count, the text Recovered and the image of the recovered case inside of the HTML container element with the test id attribute value countryWideRecoveredCases

Place the total countrywide deceased cases count, the text Deceased and the image of the deceased case inside of the HTML container element with the test id attribute value countryWideDeceasedCases

Wrap all the list items of the HTML unordered list element with the test id attribute value searchResultsUnorderedList with Link from react-router-dom

State-specific Route

NOTE: Wrap all the Line charts with an HTML container element and assign test id attribute value as lineChartsContainer to that HTML container element

The GET State details API Loader container should contain the test id with value as stateDetailsLoader

The GET Timeline details API Loader container should contain the test id with value as timelinesDataLoader

The State-specific Confirmed cases card should contain the test id value as stateSpecificConfirmedCasesContainer

The State-specific confirmed cases image should contain the alt text as state specific confirmed cases pic

The State-specific Active cases card should contain the test id value as stateSpecificActiveCasesContainer

The State-specific confirmed cases image should contain the alt text as state specific active cases pic

The State-specific Recovered cases card should contain the test id value as stateSpecificRecoveredCasesContainer

The State-specific confirmed cases image should contain the alt text as state specific recovered cases pic

The State-specific Deceased cases card should contain the test id value as stateSpecificDeceasedCasesContainer

The State-specific confirmed cases image should contain the alt text as state specific deceased cases pic

Place the total State-specific confirmed cases count, the text Confirmed and the image of the confirmed case inside of the HTML container element with the test id attribute value stateSpecificConfirmedCasesContainer

Place the total State-specific active cases count, the text Active and the image of the active case inside of the HTML container element with the test id attribute value stateSpecificActiveCasesContainer

Place the total State-specific recovered cases count, the text Recovered and the image of the recovered case inside of the HTML container element with the test id attribute value stateSpecificRecoveredCasesContainer

Place the total State-specific deceased cases count, the text Deceased and the image of the deceased case inside of the HTML container element with the test id attribute value stateSpecificDeceasedCasesContainer

The Top Districts unordered list should contain the test id attribute with value as topDistrictsUnorderedList

About Route

The Loader container should contain the test id value as aboutRouteLoader

The Faqs unordered list should contain the test id value as faqsUnorderedList


Resources
Data fetch URLs
Home Route:
'https://apis.ccbp.in/covid19-state-wise-data'

#   C o v i d D a s h B o a r d - u s i n g - R e a c t j s  
 