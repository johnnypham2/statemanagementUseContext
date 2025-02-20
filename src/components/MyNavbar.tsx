import { useContext } from "react";
import TodoContext from "../context/todoContext";
import Login from "./Login";

const MyNavbar = () => {
  const todoContext = useContext(TodoContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
            </ul>
            <span style={{ color: "black" }}>{todoContext.todos.length}</span>
            <div>
              <Login />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MyNavbar;
