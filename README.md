# Frontend Assessment - Number 8

### `Github repo`
https://git.number8.com/kawano/frontend-assessment

### `Install dependecies`
npm install

### `Run project`
npm start

### Libs used
- Axios - To fetch data from the back-end
- Lodash - Js utility lib
- MomentJs - Work with data
- React-hook-form + yup - To control and test form
- React-hot-toast - A feedback toast to the user
- React-icons - Icons
- React-tooltip - Some tooltip
- Tailwindcss - To work with CSS

## Architecture
- As I was not allowed to use design system libs like material-ui I created some components.

- I used context to pass the data between the main page and the details page.
And a localStorage to 'save' this data and not lose it when the page is refreshed.

- To control the 'Contact Agent' form I used react-hook-form and yup.

- About code standardization, I used eslint with style Standard - **npm run lint** and **npm run lint-fix**
    
- **Components**
    - Button
    - Header
    - HelpTextx
    - Modal
    - PropTypes
    - RangeSlide
    - Select
    - TextArea
    - TextField
    - Tooltip

- **Pages**
    - List
        - FilterBar
        - PropertyCard
    - Detail
        - ContactAgent
        - PropertyDescription
        - TitleImage
- **Router**
- **Store**
    - Context

## Features
- This project was built to display a list of properties. A filter was created to filter by **bedrooms, bathrooms, parking, price range and by title**.

- The button **See saved properties** open a modal and show all saved properties.

- When clicking on View Details another page is shown, displaying all details about this property. You can also send a message to the agent asking about this property.

- There is a button to **Save this property**.

## Improvements
At this part, there is something that I would do.

List Page
- Add a **design system** library like Material-UI
- Have a **real endpoint** where I could send parameters and use **query-params**.
- Add a pagination to the list of properties
- Change the modal for the material-ui modal.

Details Page
- Add a **breadcrumb** to the detail page
- Make the button **Save Property** 'check' and 'uncheck' if the property was saved or not.
- On the Details page the layout should be changed to don't have the image stretched

Add tests to test the UI and back.