import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import ContactList from "./components/ContactList";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Contact Manager</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Contacts</Link>
              </li>
              <li>
                <Link to="/add">Add Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/add" element={<AddContact />} />
          <Route path="/edit/:id" element={<EditContact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
