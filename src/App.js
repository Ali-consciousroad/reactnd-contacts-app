import React, { Component } from 'react';
import ListContacts from './ListContacts';
// Currently with take the contacts from the FE but later we'll learn to take the contact data from the BE
const contacts = [
  {
    "id": "karen",
    "name": "Karen Isgrigg",
    "handle": "karen_isgrigg",
    "avatarURL": "http://localhost:5001/karen.jpg"
  },
  {
    "id": "richard",
    "name": "Richard Kalehoff",
    "handle": "richardkalehoff",
    "avatarURL": "http://localhost:5001/richard.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "handle": "tylermcginnis",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  }
 ];
class App extends Component {
  render() {
    return (
      <div>
        <ListContacts myContact={contacts}/>
      </div>
    );
  }
}

export default App;
