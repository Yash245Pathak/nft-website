import React from 'react'
import "./Header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className="header-items">
            <h3>NFT'S</h3>
            <ul>
                <li>Explore</li>
                <li>Stats</li>
                <li>Resources</li>
            </ul>
            <button className='glow-on-hover'>Connect Wallet</button>
        </div>
    </div>
  )
}

export default Header