import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function EditContact() {
    // Get the id from the URL params
    const { id } = useParams();

    // State variables to hold the contact data
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Hook to navigate between routes
    const navigate = useNavigate();

    // useEffect to load the contact by id
    useEffect(() => {
        // Fetch the contact data by its ID
        fetch(`http://localhost:3000/contacts/${id}`)
            .then(response => response.json())
            .then(data => {
                // Update the state with the fetched contact data
                setName(data.name);
                setEmail(data.email);
            })
            .catch(error => console.error('Error fetching contact:', error));
    }, [id]);

    // Function to handle editing the contact
    const handleEditContact = async () => {
        try {
            // Send a PUT request to update the contact
            const response = await fetch(`http://localhost:3000/contacts/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            if (response.ok) {
                // If the edit is successful, navigate back to the contact list
                navigate('/');
            } else {
                throw new Error('Error editing contact');
            }
        } catch (error) {
            console.error('Error editing contact:', error);
        }
    };

    return (
        <div>
            <h2>Edit Contact</h2>
            {name && email && (
                <form>
                    <div>
                        <label>Name:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <button type="button" onClick={handleEditContact}>
                        Save Changes
                    </button>
                </form>
            )}
        </div>
    );
}

export default EditContact;
