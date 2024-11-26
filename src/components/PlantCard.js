import React, {useState} from "react";

function PlantCard({plant : {id, image, name, price}}) {
  
  const [isStock, setStock] = useState(true)
  
  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {isStock ? (
        <button onClick={()=>setStock(!isStock)} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
