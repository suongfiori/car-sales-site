import React from 'react'

const Cars = ({cars,changeHeart}) => {
  
    return (
      <div >
        {cars.map(car =>(
          <div className='cars' key={car.id}>
              <a href="/" className="car-name">{car.name}</a>
              <p className="car-location">{car.location}</p>
              <div className="cols-2">
                  <div className="car-price">{car.price}</div>
                  <i className={`far fa-heart fa-lg ${car.isLiked ? 'fas' : 'far'}`} 
                  onClick={() => changeHeart(car.id)}
                  ></i>
              </div>
          </div>
        ))}
      </div>
      )
}

export default Cars
