import React from 'react'
import '../styles/NavBarFinal.css'
import image from '../image/website-logo.png'
import '../responsive/navBarResponsive.css'

function NavBarr() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-light bg-light nav-bar">
    <div className="container-fluid">
      <a className="navbar-brand"  href="/"> <img className='logo-image' src={image} alt="logo" /> </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active navlinks" aria-current="page" href="/miphones">MI Phones</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active navlinks" aria-current="page" href="/vivoPhones">Vivo Phones</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active navlinks" aria-current="page" href="/samsungPhones">Samsung Phones</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active navlinks" aria-current="page" href="/redmiphones">Redmi Phones</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active navlinks" aria-current="page" href="/tv">TV</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active navlinks" aria-current="page" href="/laptops">Laptops</a>
          </li>


          <li className="nav-item">
            <a className="nav-link active navlinks" aria-current="page" href="/audio">Audio</a>
          </li>

          <li className="nav-item">
            <a className="nav-link active navlinks" aria-current="page" href="https://store.mi.com/in/site/login">Sign In</a>
          </li>



        </ul>
        <form className="d-flex" role="search">
          <input className="form-control me-2 search-input" type="search" placeholder="Search Prdouct" aria-label="Search"/>
          <button className="btn search-btn" type="submit">Search </button>
        </form>
      </div>
    </div>
  </nav>
    </div>
  )
}

export default NavBarr
