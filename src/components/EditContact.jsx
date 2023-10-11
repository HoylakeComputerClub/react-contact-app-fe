// will need to import useEffect, useState, useNavigate and useParams
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditContact.css";

function EditContact() {
  // get the id from the params

  const { id } = useParams();
  const navigate = useNavigate();

  // State variables for contact details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactLoaded, setContactLoaded] = useState(false);
  // TODO: create a useEffect to pull the contact by id
  useEffect(() => {
    // Use an effect to load the contact by id
    fetch(`${import.meta.env["VITE_SERVER_URI"]}/contacts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
        setContactLoaded(true);
      })
      .catch((error) => console.error("Error fetching contact:", error));
  }, [id]);
  // TODO: Create a handleEditContact and add it to the form
  const handleEditContact = async () => {
    try {
      const response = await fetch(
        `${import.meta.env["VITE_SERVER_URI"]}/contacts/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        },
      );

      if (response.ok) {
        navigate("/");
      } else {
        throw new Error("Error editing contact");
      }
    } catch (error) {
      console.error("Error editing contact:", error);
    }
  };

  return (
    <div className="edit-contact">
      <h2>Edit Contact</h2>
      {contactLoaded ? (
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default EditContact;
