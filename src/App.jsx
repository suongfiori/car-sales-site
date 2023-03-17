import React, {useState} from "react"
import './index.css'
import Cars from "./Components/Cars"
import Header from "./Components/Header"
import Labels from "./Components/Labels"
import data from "./Components/Data"
import { nanoid } from "nanoid"

function App() {

  const [cars, setCars] = useState(generateCars())
  const [showPanel, setShowPanel] = useState(false);
  
  function generateCars () {
    return data.map(car => 
      ({ 
        id: nanoid(), 
        isLiked: false, 
        ...car 
      }))
  }

  function handleMenuClick() {
    setShowPanel(!showPanel);
  }

  const changeHeart = (id) => {
    setCars((prevCars) =>
      prevCars.map((car) =>
        car.id === id ? { ...car, isLiked: !car.isLiked } : car
      )
    );
  };


  return (
    <div className="container">
      <Header 
        handleMenuClick={handleMenuClick}
        showPanel={showPanel}
      />
      <Labels/>
      <Cars 
        cars={cars}
        setCars={setCars}
        changeHeart={changeHeart}
      />
    </div>
  )
}

export default App
