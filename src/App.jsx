import ContactList from './components/ContactList'
import AddContact from './components/AddContact'
import EditContact from './components/EditContact'
import './App.css'

function App() {

  return (
    <div className='app'>
      <ContactList />
      <AddContact />
      <EditContact />
    </div>
  )
}

export default App
