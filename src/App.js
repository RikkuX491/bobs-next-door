import './App.css';
import Search from './components/Search'
import NewStoreForm from './components/NewStoreForm';
import StoreList from './components/StoreList';
import {useState, useEffect} from 'react'

function App() {

  const [stores, setStores] = useState([])
  const [formData, setFormData] = useState({})
  const [searchText, setSearchText] = useState("")

  // console.log(searchText)

  // console.log(formData)
  
  // console.log(stores)

  useEffect(() => {
    fetch('http://localhost:8085/stores')
    .then(response => response.json())
    .then(storesData => {
      setStores(storesData)
    })
  }, [])

  function addStore(event){
    event.preventDefault()

    // console.log([...stores, formData])
    fetch('http://localhost:8085/stores', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(newStore => {
      setStores([...stores, newStore])
    })
  }

  function updateFormData(event){
    // console.log(event.target.id)
    // console.log(event.target.value)
    if(event.target.id === 'season' || event.target.id === 'episode'){
      setFormData({...formData, [event.target.id]: Number(event.target.value)})
    }
    else{
      setFormData({...formData, [event.target.id]: event.target.value})
    }
  }

  function updateSearchText(event){
    setSearchText(event.target.value)
  }

  const filteredStores = stores.filter(store => {
    // if(searchText === ""){
    //   return true
    // }

    return store.name.toUpperCase().includes(searchText.toUpperCase())
  })

  return (
    <div className="main-container">
      <img src="/images/bobsburgers.png" />
      <h1>Neighbor Stores</h1>
      <Search updateSearchText={updateSearchText} />
      <NewStoreForm addStore={addStore} updateFormData={updateFormData} />
      <StoreList stores={filteredStores} />
    </div>
  );
}

export default App;
