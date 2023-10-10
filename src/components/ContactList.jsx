import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function ContactList() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        console.log("Running the use effect...");
        
        // Make a GET request to fetch contacts from the backend
        fetch(`${import.meta.env['VITE_SERVER_URI']}/contacts`)
            .then(response => response.json())
            .then(data => {
                setContacts(data); // Update state with fetched data
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

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


