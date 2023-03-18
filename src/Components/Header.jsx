import React from 'react'
import menu from "../assets/menu.svg"

const Header = ({handleMenuClick, showPanel}) => {
  return (
    <div className='header'>
        <div className="headings">
            <h1>Available Cars</h1>
            <p>There are 15 cars that match your criteria</p>
        </div>

        <div className="options">
            <div className="icons">
                <input type="text" className="search" />
                <img src={menu} alt="menu" 
                    className="menu" 
                    onClick={handleMenuClick}/>
            </div>
            
            <div className="filter"
            style={{
                clipPath: showPanel
                  ? 'circle(100% at 50% 50%)'
                  : 'circle(0% at 100% 0%)'
              }}
            >
                <div className="chk-container">
                    <input type="checkbox" id="new" />
                    <label htmlFor="new">New cars</label>
                </div>
                <div className="chk-container">
                    <input type="checkbox" id="used" />
                    <label htmlFor="used">Used cars</label>
                </div>
                <div className="chk-container">
                    <input type="checkbox" id="dealer" />
                    <label htmlFor="dealer">Dealerships</label>
                </div>
                <div className="chk-container">
                    <input type="checkbox" id="owner" />
                    <label htmlFor="owner">For sale by owners</label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header