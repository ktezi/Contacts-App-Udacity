import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Empty from './Empty'



class ListContacts extends Component {
    static PropTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.array.isRequired,
    }
    state = {
        query: '',
        copyShow: []
    }
    updateQuery = (query, showingContacts) => {
        this.setState({
            query: query.trim(),
            copyShow: [...showingContacts]
        })
    }
    clearQuery = () => {
        this.setState({
            query: ''
        })
    }

    render() {
        const { query } = this.state
        const { contacts, onDeleteContact } = this.props
        let showingContacts = query === ''
            ? contacts
            : contacts.filter((c) => (
                c.name.toLowerCase().includes(query.toLowerCase())))
        console.log(showingContacts)
        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={query}
                        onChange={(event) => {
                            console.log(event)
                            this.updateQuery(event.target.value, showingContacts)
                        }}
                    />
                </div>

                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now showing {showingContacts.length} of {contacts.length}</span>
                        <button onClick={this.clearQuery}>Show All</button>
                    </div>
                )}
                <ol className="contact-list">
                    {showingContacts.length > 0 ? showingContacts.map((contact) => (
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar'
                                style={{
                                    backgroundImage: `url(${contact.avatarURL})`
                                }}
                            ></div>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button className='contact-remove' onClick={() => onDeleteContact(contact)}>
                            </button>
                        </li>
                    )) : <Empty contacts={this.props.contacts} showingContacts={this.state.copyShow} query={this.state.query} showAll={this.clearQuery} />}
                </ol>
            </div>

        )
    }
}

export default ListContacts
