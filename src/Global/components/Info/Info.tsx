import { Link } from "react-router-dom";

function Info() {
  return (
    <>
      <div className="info-container">
        <ul className="items">
          <li className="info-item">
            <Link to={""}>Privacy</Link>
          </li>
          <span>
            <p>.</p>
          </span>
          <li className="info-item">
            <Link to={""}>Terms</Link>
          </li>
          <span>
            <p>.</p>
          </span>
          <li className="info-item">
            <Link to={""}>Advertising</Link>
          </li>
          <span>
            <p>.</p>
          </span>
          <li className="info-item">
            <Link to={""}>Ad Choices</Link>
          </li>
          <span>
            <p>.</p>
          </span>
          <li className="info-item">
            <Link to={""}>Cookies</Link>
          </li>
          <span>
            <p>.</p>
          </span>
          <li className="info-item">
            <Link to={""}>More</Link>
          </li>
          <span>
            <p>.</p>
          </span>
          <li className="info-item">
            <Link to={""}>Meta &copy; {new Date().getFullYear()}</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Info;
