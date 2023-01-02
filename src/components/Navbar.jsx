import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Login from './Login'

const Navbar = () => {

  const state = useSelector((state) => state.handleCart)

  const logOut = () => {
    localStorage.setItem("user", "");
    localStorage.setItem("prod", "");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-2 shadow-sm ">
        <div className="w-100 d-lg-flex px-4">
          <NavLink className="navbar-brand text-primary fw-bold fs-4" to='/'>LA COLLECTION</NavLink>
          <button className="navbar-toggler float-end" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to='/'>Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/products'>Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/about'>About</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/contact'>Contact</NavLink>
              </li>
            </ul>
            <div className="buttons">
              <NavLink to='/cart' className='ms-2 me-4 text-primary position-relative'><i className="fa fa-shopping-cart fa-lg" aria-hidden="true"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {state.length}
                </span>
              </NavLink>
            </div>
            {localStorage.getItem("user") ? (
              <div className="dropdown">
                <a
                  className="dropdown-toggle d-flex align-items-center hidden-arrow"
                  id="navbarDropdownMenuAvatar" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    className="rounded-circle" height="35"
                    alt="Black and White Portrait of a Man" loading="lazy"
                  />
                </a>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
                  <li>
                    <NavLink className="dropdown-item" to="/profile"><i className="fa fa-user me-1" aria-hidden="true"></i> My profile</NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/setting"><i className="fa fa-cog me-1" aria-hidden="true"></i> Settings</NavLink>
                  </li>
                  <li>
                    {!localStorage.getItem('user') && <NavLink to='/login' className="dropdown-item"><i className="fa fa-sign-in me-1" aria-hidden="true"></i> Login</NavLink>}
                  </li>
                  <li>
                    {/* <NavLink to='/register' className="dropdown-item"><i className="fa fa-user-plus" aria-hidden="true"></i> Register</NavLink> */}
                    {localStorage.getItem('user') && <span className="dropdown-item" onClick={logOut} style={{ cursor: "pointer" }}><i className="fa fa-sign-out me-1" aria-hidden="true"></i> Logout</span>}
                  </li>
                </ul>
              </div>
            ) : (<Login />)}


          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar