# CRUD React App with React Router

This is a simple CRUD (Create, Read, Update, Delete) React application that uses React Router for navigation and manages a list of contacts. It allows you to view, create, update, and delete contact records.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js and npm (Node Package Manager) must be installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine using `git clone`.

```bash
git clone https://github.com/HoylakeComputerClub/react-contacts.git
```

2. Navigate to the project directory
```bash
cd react-contacts
```

3. install the project dependencise
```bash
npm install
```
4. make a new file `.env` in the case directory of the project and copy the `.env-example` content inside it

5. Start the development server
```bash
npm run dev
```
## Usage

### Home

- The home page displays a simple welcome message and provides a link to view the contact list.

### Contact List

- Click on "View Contacts" on the home page or navigate directly to `/contacts` to access the contact list.
- The contact list displays the names of all contacts.
- Click on a contact name to view its details.

### Contact Details

- When you click on a contact's name in the contact list, you'll be taken to the contact details page.
- This page displays detailed information about the selected contact, such as their name, email, and any other contact details you choose to add.

### Add Contact

- To create a new contact, navigate to the "Add Contact" page by clicking on the "Add Contact" link in the navigation menu or by going to `/add-contact`.
- Fill out the contact details in the form (e.g., name, email).
- Click the "Save" button to add the new contact to the list.
- You'll be redirected to the contact list, where you can see the newly created contact.

### Edit Contact

- To update an existing contact, click on a contact's name in the contact list to view their details.
- From the contact details page, click the "Edit" button.
- You'll be taken to the contact form with the existing contact details pre-filled.
- Modify the contact details as needed.
- Click the "Save" button to update the contact.
- You'll be redirected to the contact details page with the updated information.

### 404 Page

- If you enter an invalid URL or navigate to a non-existent route, a "404 Page Not Found" message is displayed.

## Folder Structure

The project folder structure is as follows:
```
src/
  App.jsx

components/
  AddContact.jsx
  EditContact.jsx
  ContactList.jsx
```


- `ContactList.jsx`: Displays the list of contacts.
- `AddContact.jsx`: Allows for creating contacts.
- `EditContact.jsx`: Allows for updating contacts.
- `App.jsx`: The main application component that sets up the React Router routes and manages contact data.

## Contributing
The information about making contributions is inside the [contributiong](CONTRIBUTIONG.md) file


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
