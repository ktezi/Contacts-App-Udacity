import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Empty from './Empty'
import { Link } from 'react-router-dom'



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

        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    <Link
                        to='/create'
                        className='add-contact'
                    >Add Contact</Link>
                </div>

                {showingContacts && showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now showing {showingContacts.length} of {contacts.length}</span>
                        <button onClick={this.clearQuery}>Show all</button>
                    </div>
                )}

                <ol className='contact-list'>
                    {showingContacts && showingContacts.map((contact) => (
                        <li key={contact.id} className='contact-list-item'>
                            <div
                                className='contact-avatar'
                                style={{
                                    backgroundImage: `url(${contact.avatarURL})`
                                }}
                            ></div>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button
                                onClick={() => onDeleteContact(contact)}
                                className='contact-remove'>
                                Remove
              </button>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default ListContacts
