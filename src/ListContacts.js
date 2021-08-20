import React, { Component } from 'react'

class ListContacts extends Component {
    render() {
        // Display the props in the console
        console.log('Props', this.props)
        return (
            <ol className='contact-list'>

            </ol>
        )
    }
}

export default ListContacts