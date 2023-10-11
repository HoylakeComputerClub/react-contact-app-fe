import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddContact.css";

function AddContact() {
  // State variables for name and email
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Hook to navigate between routes
  const navigate = useNavigate();

  // Function to handle adding a new contact (async supremacy)
  const handleAddContact = async () => {
    try {
      // Sending a POST request to the backend
      const response = await fetch(
        `${import.meta.env["VITE_SERVER_URI"]}/contacts`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, email }),
        },
      );

      if (response.ok) {
        // If the request was successful, navigate to the root route
        navigate("/");
      } else {
        // If there's an error, then theres nothing we can do (NAPOLEAN MEME)(IT THROWS AN ERROR)
        throw new Error("Error adding contact");
      }
    } catch (error) {
      // Catch and log any errors that occur
      console.error("Error adding contact:", error);
    }
  };

  return (
    <div className="add-contact">
      <h2>Add Contact</h2>
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
        <button type="button" onClick={handleAddContact}>
          Add Contact
        </button>
      </form>
    </div>
  );
}

export default AddContact;
