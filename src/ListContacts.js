import React, { Component } from 'react'

class ListContacts extends Component {
    render() {
        // Display the props in the console
        // console.log('Props', this.props)
        return (
            <ol className='contact-list'>
                {this.props.myContact.map((contact) => (
                    /* id is used by React to work more efficiently.
                    If one of the list item change, React can use the id to know that instead of 
                    rendering the list at every change */
                    <li key={contact.id} className='contact-list-item'>
                        {/* Use the contact image as background image */}
                        <div
                            className='contact-avatar'
                            style={{
                                backgroundImage: `url(${contact.avatarURL})`
                            }}
                        ></div>
                        {/* Render the name and the handle */}
                        <div className='contact-details'>
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button className='contact-remove'>
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
        )
    }
}

export default ListContacts