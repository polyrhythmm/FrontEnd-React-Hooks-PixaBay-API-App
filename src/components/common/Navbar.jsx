import { Link } from 'react-router-dom';

function Navbar(props) {
  const { onSearch } = props;

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Pixabay API</span>
        <ul className="navbar-nav ml-auto text-black">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={(e) => onSearch(e)}
          />
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
