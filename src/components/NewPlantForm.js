import React, {useState} from "react";

function NewPlantForm({ onPlantAdd }) {

  const plantObj = {
    name: "",
    image: "",
    price: 0
  }

  const [formData, setFormData] = useState(plantObj)
  
  function onFormSubmit(event){
    event.preventDefault()
    onPlantAdd(formData)
    setFormData(plantObj)
  }

  function onChange(event){
    const key = event.target.name
    const value = event.target.value
    const updatedPlant = {
      ...formData,
      [key]: value
    }
    setFormData(updatedPlant)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="name" placeholder="Plant name" onChange={onChange} value={formData.name} />
        <input type="text" name="image" placeholder="Image URL" onChange={onChange} value={formData.image} />
        <input type="number" name="price" step="0.01" placeholder="Price" onChange={onChange} value={formData.price} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
