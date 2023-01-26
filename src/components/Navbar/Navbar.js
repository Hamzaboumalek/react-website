//import 'react-bootstrap/dist/react-bootstrap.css';
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import './styles.scss'
//import 'bootstrap/scss/bootstrap.scss';


const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src='../Navbar/logo.png' alt="logo" className="logo" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <img src='../Navbar/hamburger.png' alt="hamburger menu" className="logo" />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-a">
                  Acheter
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/acheter/maison">Maison</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/acheter/appartement">Appartement</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/acheter/terrain">Terrain</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <NavLink to="/Louer">Louer</NavLink>
            </li>
            <li>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-e">
                Estimer
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/Estimer/Estimer1">Estimer1</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/Estimer/Estimer2">Estimer2</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/Estimer/Estimer3">Estimer2</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <NavLink to="/Prix immobiliers">Prix immobiliers</NavLink>
            </li>
            <li>
            <Dropdown>
                <Dropdown.Toggle variant="secondary" id="dropdown-c">
                Crédit
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/Estimer/Crédit1">Crédit1</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/Estimer/Crédit2">Crédit2</Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/Estimer/Crédit3">Crédit3</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li>
              <NavLink to="/Agences">Agences</NavLink>
            </li>
          </ul>
        </div> 
      </div>
    </nav>
    <div className="separator"></div>
    <div className="search-container">
    <form>
<input type="text" placeholder="Entrez une ville, un quartier," />
<button type="submit">Search</button>
</form>

    </div>
  )
}

export default Navbar