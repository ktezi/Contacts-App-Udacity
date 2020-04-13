import React, { Component } from 'react'

export class Empty extends Component {
    render() {
        console.log('empty', this.props.contacts)
        console.log('empty', this.props.showingContacts)
        console.log('empty', this.props.query.length)
        return (
            <div className='image-wrap'>
                {this.props.query && this.props.query.length > this.props.contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now showing {this.props.showingContacts.length} of {this.props.contacts.length}</span>
                        <button onClick={this.props.showAll}>Show All</button>
                    </div>
                )}
                <img className='no-result-found' src="https://cdn.dribbble.com/users/283708/screenshots/7084440/media/6cd8b29540bcfb6a7693c27f58db7b56.png?" />

            </div>
        )
    }
}

export default Empty
