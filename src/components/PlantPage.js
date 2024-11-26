import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  
  const baseUrl = "http://localhost:6001/plants"
  const [plants, setPlants] = useState([])
  const [query, setQuery] = useState("")
  
  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(query.toLowerCase()));

  useEffect(()=> {
    fetch(baseUrl)
      .then(res => res.json())
      .then(data => setPlants(data))
  },[])
  
  function handleSearch(event){
    const query = event.target.value
    setQuery(query)
  }

  function handlePlantAdd(plantObj){
    const requestObj = {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(plantObj)
    }

    fetch(baseUrl,requestObj)
      .then(res => res.json())
      .then(data => setPlants([...plants,data]))
  }

  return (
    <main>
      <NewPlantForm onPlantAdd={handlePlantAdd} />
      <Search query={query} onQuery={handleSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
