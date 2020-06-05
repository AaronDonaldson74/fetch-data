import React from 'react';
import ContactCardsContainer from './components/contact-card-container';

function App() {
  return (
    <div className="App">
      hello from App.js
     <ContactCardsContainer />
    </div>
  );
}

export default App;

// # Second Day Challenge / Fetch Data
// - Create a new project fetch-contact-cards
// - Create a new folder called Components
// - Create a new Class Component called ContactCardsContainer
// - Create a new Functional Component called ContactCard
// - Create some state inside of the ContactCardsContainer:
// ```javascript
// users = []
// ```
// - ContactCardsContainer needs to fetch data from the following url and update state.users with its data:
//   - https://jsonplaceholder.typicode.com/users
//   - I would recommend the lifecycle method componentDidMount()
// - ContactCard will render:
//   - NAME
//   - Phone: users phone number
//   - Email: users email
//   - Company: users company name
//   - Address: users street, city, and state
// - The info to render in ContactCard will come from ContactCardsContainer as props
// - You will need to map over state in ContactCardsContainer to render ContactCards and pass the user info as props