import { useState } from 'react'
import { Link } from 'react-router-dom'


function ContactList() {
    const [contacts, setContacts] = useState([
        {id: 1, name: "Dave Jones", email: "dave@jones.com"},
        {id: 2, name: "John Jenkins", email: "john@jenkins.com"},
        {id: 3, name: "Jim Smith", email: "jim@smith.com"},
        {id: 4, name: "Bob Doe", email: "bob@doe.com"}
    ]);

    return (
        <div>
            <h2>Contacts</h2>
            <ul>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    {contact.name} - {contact.email}
                    <Link to={`/edit/${contact.id}`}>Edit</Link>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default ContactList