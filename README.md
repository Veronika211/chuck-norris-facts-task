# Chuck Norris Facts App

The Chuck Norris Facts App is a React application that allows users to search for Chuck Norris facts
based on keyword, view detailed information about each fact and access their last 10 search history.
If no previous searches are available, the app displays a random fact. Additionally, the app offers the
functionality to clear the search history and provides a load more button for displaying additional
facts, showing the initial set of 5 facts by default.

## Installation

### Clone the Repository

1. Open your terminal or command prompt.
2. Change the current working directory to the location where you want the app directory.
3. Run the following command to clone the repository:

```bash
git clone https://github.com/Veronika211/address-autocomplete.git
```
### Install Dependencies

Run the following command to install all neccessary dependencies:
```
npm install
```
### Start the App
1. Run the following command to start the app
```
npm start
```
2. Open your web browser and navigate to http://localhost:3000.

## Development
### Folder structure
App.js - the main component

Folders:
- pages folder: Contains two subfolders that contain the pages components and styling for
pages components
- assets/icon folder: Contains the Chuck Norris icon image file used in the Fact Details Page
- api folder: Contains the chuckNorrisApi.js file, which handles data fetching and
communication with the Chuck Norris API.
- components folder: Contains various subfolders:
 ui subfolder: Contains reusable UI components that are being used through the app
 singleFact, randomFact, searchForm and previousSearchesList folders: Each contains
components specific to the corresponding feature/page
- store folder: Contains the FactContext.js file responsible for managing the global state of the
app, particularly the facts array
- styles folder: Contains a file defining global styling used throught the app

### Data Fetching
The app integrates with the Chuck Norris API to retrieve random facts and search for facts by keyword.
It communicates with the API using the provided endpoints and React Query’s query to handle the API
requests and responses.

### Styling
The app uses Styled-Components for writing CSS-in-JS. This library offers dynamic styling and style
reusability. For every component style is written in separated file within each component’s folder for
better readability and organization.

