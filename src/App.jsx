// importation des composants
import HomePage from './components/HomePage'
import Navbar from './components/Navbar'
// component 
// any component should be capitalized
// any component should return only one element 
function App() {
  let user = {
    isLogged: false,
    address : {
        city: 'Paris',
        country: 'France',
    },
    name: 'Mohsen'
  }
  return (
    <div>
      <Navbar user={user} darkmode={false}></Navbar>
      
      <HomePage />
    </div>
  )
}


export default App
