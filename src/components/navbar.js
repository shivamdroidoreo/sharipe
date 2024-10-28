import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg bg-black border-bottom border-body"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Sharipe
          </a>
          <div className="d-flex align-items-center">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row">
              <li className="nav-item">
                <a className="nav-link active mx-2" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-2" href="#">
                  About Us
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
