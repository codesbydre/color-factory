import { Link } from "react-router-dom";

function Colors({ colors }) {
  return (
    <div>
      <h2>Welcome to the color factory.</h2>
      <Link to="/colors/new">Add a color</Link>
      <ul>
        {colors.map((color) => (
          <li key={color}>
            <Link
              to={`/colors/${
                color.startsWith("#") ? color.substring(1) : color
              }`}
            >
              {color}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Colors;
